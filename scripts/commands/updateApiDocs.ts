// This code is a Qiskit project.
//
// (C) Copyright IBM 2023.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { join, parse, relative } from "path";
import { readFile, writeFile } from "fs/promises";

import { globby } from "globby";
import { uniq, uniqBy } from "lodash";
import { mkdirp } from "mkdirp";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import transformLinks from "transform-markdown-links";

import { ObjectsInv } from "../lib/api/objectsInv";
import { sphinxHtmlToMarkdown } from "../lib/api/htmlToMd";
import { saveImages } from "../lib/api/saveImages";
import { generateToc } from "../lib/api/generateToc";
import { HtmlToMdResult } from "../lib/api/HtmlToMdResult";
import { mergeClassMembers } from "../lib/api/mergeClassMembers";
import flattenFolders from "../lib/api/flattenFolders";
import { updateLinks } from "../lib/api/updateLinks";
import { specialCaseResults } from "../lib/api/specialCaseResults";
import addFrontMatter from "../lib/api/addFrontMatter";
import { dedupeHtmlIdsFromResults } from "../lib/api/dedupeHtmlIds";
import { Pkg } from "../lib/api/Pkg";
import { zxMain } from "../lib/zx";
import { pathExists, getRoot, rmFilesInFolder } from "../lib/fs";
import { downloadCIArtifact } from "../lib/api/apiArtifacts";
import {
  addNewReleaseNotes,
  generateReleaseNotesIndex,
  updateHistoricalTocFiles,
  writeSeparateReleaseNotes,
} from "../lib/api/releaseNotes";

interface Arguments {
  [x: string]: unknown;
  package: string;
  version: string;
  historical: boolean;
  dev: boolean;
  skipDownload: boolean;
}

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("package", {
      alias: "p",
      type: "string",
      choices: Pkg.VALID_NAMES,
      demandOption: true,
      description: "Which package to update",
    })
    .option("version", {
      alias: "v",
      type: "string",
      demandOption: true,
      description: "The full version string of the --package, e.g. 0.44.0",
    })
    .option("historical", {
      type: "boolean",
      default: false,
      description: "Is this a prior release?",
    })
    .option("dev", {
      type: "boolean",
      default: false,
      description: "Is this a dev release?",
    })
    .option("skip-download", {
      type: "boolean",
      default: false,
      description:
        "Rather than downloading the artifact from Box, reuse what is already downloaded. This can save time, but it risks using an outdated version of the docs.",
    })
    .parseSync();
};

zxMain(async () => {
  const args = readArgs();

  // Determine the minor version, e.g. 0.44.0 -> 0.44
  const versionMatch = args.version.match(/^(\d+\.\d+)/);
  if (versionMatch === null) {
    throw new Error(
      `Invalid --version. Expected the format 0.44.0, but received ${args.version}`,
    );
  }

  if (args.historical && args.dev) {
    throw new Error(
      `${args.package} ${args.version} cannot be historical and dev at the same time. Please remove at least only one of these two arguments: --historical, --dev.`,
    );
  }

  const devRegex = /[0-9](rc|-dev)/;
  if (args.dev && !args.version.match(devRegex)) {
    throw new Error(
      `${args.package} ${args.version} is not a correct dev version. Please make sure the version has one of the following suffixes immediately following the patch version: rc, -dev. e.g. 1.0.0rc1 or 1.0.0-dev`,
    );
  }

  const type = args.historical ? "historical" : args.dev ? "dev" : "latest";

  const pkg = await Pkg.fromArgs(
    args.package,
    args.version,
    versionMatch[0],
    type,
  );

  const artifactFolder = pkg.ciArtifactFolder();
  if (args.skipDownload && (await pathExists(`${artifactFolder}/artifact`))) {
    console.log(`Skip downloading sources for ${pkg.name}:${pkg.version}`);
  } else {
    await downloadCIArtifact(pkg, artifactFolder);
  }

  const outputDir = pkg.outputDir(`${getRoot()}/docs`);
  if (!pkg.isLatest() && !(await pathExists(outputDir))) {
    await mkdirp(outputDir);
  } else {
    console.log(
      `Deleting existing markdown for ${pkg.name}:${pkg.versionWithoutPatch}`,
    );
    await rmFilesInFolder(outputDir);
  }

  console.log(
    `Convert sphinx html to markdown for ${pkg.name}:${pkg.versionWithoutPatch}`,
  );
  await convertHtmlToMarkdown(`${artifactFolder}/artifact`, outputDir, pkg);
});

async function convertHtmlToMarkdown(
  htmlPath: string,
  markdownPath: string,
  pkg: Pkg,
) {
  const maybeObjectsInv = await (pkg.hasObjectsInv()
    ? ObjectsInv.fromFile(htmlPath)
    : undefined);
  const files = await globby(
    [
      "apidocs/**.html",
      "apidoc/**.html",
      "stubs/**.html",
      "release_notes.html",
    ],
    {
      cwd: htmlPath,
    },
  );

  let results: Array<HtmlToMdResult & { url: string }> = [];
  for (const file of files) {
    const html = await readFile(join(htmlPath, file), "utf-8");
    const result = await sphinxHtmlToMarkdown({
      html,
      fileName: file,
      determineGithubUrl: pkg.determineGithubUrlFn(),
      imageDestination: pkg.outputDir("/images"),
      releaseNotesTitle: `${pkg.title} ${pkg.versionWithoutPatch} release notes`,
    });

    // Avoid creating an empty markdown file for HTML files without content
    // (e.g. HTML redirects)
    if (result.markdown == "") {
      continue;
    }

    const { dir, name } = parse(`${markdownPath}/${file}`);
    let url = `/${relative(`${getRoot()}/docs`, dir)}/${name}`;
    results.push({ ...result, url });

    if (
      pkg.isLatest() &&
      pkg.hasSeparateReleaseNotes &&
      file.endsWith("release_notes.html")
    ) {
      addNewReleaseNotes(pkg);
    }
  }

  const allImages = uniqBy(
    results.flatMap((result) => result.images),
    (image) => image.fileName,
  );

  const dirsNeeded = uniq(
    results.map((result) => parse(urlToPath(result.url)).dir),
  );
  for (const dir of dirsNeeded) {
    await mkdirp(dir);
  }

  results = await mergeClassMembers(results);
  flattenFolders(results);
  specialCaseResults(results);
  await updateLinks(results, maybeObjectsInv, pkg.transformLink);
  await dedupeHtmlIdsFromResults(results);
  addFrontMatter(results, pkg);

  await maybeObjectsInv?.write(pkg.outputDir("public"));
  for (const result of results) {
    let path = urlToPath(result.url);

    // Historical or dev versions with a single release notes file should not
    // modify the current API's file.
    if (
      !pkg.hasSeparateReleaseNotes &&
      !pkg.isLatest() &&
      path.endsWith("release-notes.md")
    ) {
      continue;
    }

    // Dev versions haven't been released yet and we don't want to modify the release notes
    // of prior versions
    if (pkg.isDev() && path.endsWith("release-notes.md")) {
      continue;
    }

    if (pkg.hasSeparateReleaseNotes && path.endsWith("release-notes.md")) {
      // Convert the relative links to absolute links
      result.markdown = transformLinks(result.markdown, (link, _) =>
        link.startsWith("http") || link.startsWith("#") || link.startsWith("/")
          ? link
          : `/api/${pkg.name}/${link}`,
      );

      await writeSeparateReleaseNotes(pkg, result.markdown);
      continue;
    }

    await writeFile(path, result.markdown);
  }

  console.log("Generating toc");
  const toc = generateToc(pkg, results);
  await writeFile(
    `${markdownPath}/_toc.json`,
    JSON.stringify(toc, null, 2) + "\n",
  );

  // Add the new release entry to the _toc.json for all historical API versions.
  // We don't need to add any entries in projects with a single release notes file.
  if (pkg.isLatest() && pkg.hasSeparateReleaseNotes) {
    await updateHistoricalTocFiles(pkg);
  }

  if (pkg.isLatest() && pkg.hasSeparateReleaseNotes) {
    console.log("Generating release-notes/index");
    const markdown = generateReleaseNotesIndex(pkg);
    await writeFile(`${markdownPath}/release-notes/index.md`, markdown);
  }

  console.log("Generating version file");
  const pkg_json = { name: pkg.name, version: pkg.version };
  await writeFile(
    `${markdownPath}/_package.json`,
    JSON.stringify(pkg_json, null, 2) + "\n",
  );

  if (!pkg.isHistorical() || (await pathExists(`${htmlPath}/_images`))) {
    // Some historical versions don't have the `_images` folder in the artifact store in Box (https://ibm.ent.box.com/folder/246867452622)
    console.log("Saving images");
    await saveImages(allImages, `${htmlPath}/_images`, pkg);
  }
}

function urlToPath(url: string) {
  return `${getRoot()}/docs${url}.md`;
}
