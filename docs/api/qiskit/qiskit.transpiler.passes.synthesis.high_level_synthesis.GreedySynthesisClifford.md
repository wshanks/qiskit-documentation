---
title: GreedySynthesisClifford
description: API reference for qiskit.transpiler.passes.synthesis.high_level_synthesis.GreedySynthesisClifford
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.synthesis.high_level_synthesis.GreedySynthesisClifford
---

# GreedySynthesisClifford

<span id="qiskit.transpiler.passes.synthesis.high_level_synthesis.GreedySynthesisClifford" />

`qiskit.transpiler.passes.synthesis.high_level_synthesis.GreedySynthesisClifford`[GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/transpiler/passes/synthesis/high_level_synthesis.py "view source code")

Bases: [`HighLevelSynthesisPlugin`](qiskit.transpiler.passes.synthesis.plugin.HighLevelSynthesisPlugin "qiskit.transpiler.passes.synthesis.plugin.HighLevelSynthesisPlugin")

Clifford synthesis plugin based on the greedy synthesis Bravyi-Hu-Maslov-Shaydulin method.

This plugin name is :`clifford.greedy` which can be used as the key on an [`HLSConfig`](qiskit.transpiler.passes.HLSConfig "qiskit.transpiler.passes.synthesis.high_level_synthesis.HLSConfig") object to use this method with [`HighLevelSynthesis`](qiskit.transpiler.passes.HighLevelSynthesis "qiskit.transpiler.passes.synthesis.high_level_synthesis.HighLevelSynthesis").

## Methods

### run

<span id="qiskit.transpiler.passes.synthesis.high_level_synthesis.GreedySynthesisClifford.run" />

`run(high_level_object, coupling_map=None, target=None, qubits=None, **options)`

Run synthesis for the given Clifford.

