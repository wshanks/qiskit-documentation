---
title: GaussianLogDriver
description: API reference for qiskit.chemistry.drivers.GaussianLogDriver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.drivers.GaussianLogDriver
---

# GaussianLogDriver

<span id="qiskit.chemistry.drivers.GaussianLogDriver" />

`GaussianLogDriver(jcf)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/drivers/gaussiand/gaussian_log_driver.py "view source code")

Bases: `qiskit.chemistry.drivers.base_driver.BaseDriver`

Gaussian™ 16 log driver.

Qiskit chemistry driver using the Gaussian™ 16 program that provides the log back, via [`GaussianLogResult`](qiskit.chemistry.drivers.GaussianLogResult "qiskit.chemistry.drivers.GaussianLogResult"), for access to the log and data recorded there.

See [http://gaussian.com/gaussian16/](http://gaussian.com/gaussian16/)

This driver does not use Gaussian 16 interfacing code, as certain data such as forces properties are not present in the MatrixElement file. The log is returned as a [`GaussianLogResult`](qiskit.chemistry.drivers.GaussianLogResult "qiskit.chemistry.drivers.GaussianLogResult") allowing it to be parsed for whatever data may be of interest. This result class also contains ready access to certain data within the log.

**Parameters**

**jcf** (`Union`\[`str`, `List`\[`str`]]) – A job control file conforming to Gaussian™ 16 format. This can be provided as a single string with ‘\n’ line separators or as a list of strings.

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Invalid Input

## Methods

### run

<span id="qiskit.chemistry.drivers.GaussianLogDriver.run" />

`GaussianLogDriver.run()`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/drivers/gaussiand/gaussian_log_driver.py "view source code")

Runs the driver to produce a result given the supplied job control file.

**Return type**

`GaussianLogResult`

**Returns**

A log file result.

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Missing output log

## Attributes

<span id="qiskit.chemistry.drivers.GaussianLogDriver.basis" />

### basis

return basis

**Return type**

`str`

<span id="qiskit.chemistry.drivers.GaussianLogDriver.hf_method" />

### hf\_method

return Hartree-Fock method

**Return type**

`str`

<span id="qiskit.chemistry.drivers.GaussianLogDriver.molecule" />

### molecule

return molecule

**Return type**

`Optional`\[`Molecule`]

<span id="qiskit.chemistry.drivers.GaussianLogDriver.supports_molecule" />

### supports\_molecule

True for derived classes that support Molecule.

**Return type**

`bool`

**Returns**

True if Molecule is supported.

