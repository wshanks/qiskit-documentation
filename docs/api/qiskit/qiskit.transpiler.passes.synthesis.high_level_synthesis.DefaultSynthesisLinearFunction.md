---
title: DefaultSynthesisLinearFunction
description: API reference for qiskit.transpiler.passes.synthesis.high_level_synthesis.DefaultSynthesisLinearFunction
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.synthesis.high_level_synthesis.DefaultSynthesisLinearFunction
---

# DefaultSynthesisLinearFunction

<span id="qiskit.transpiler.passes.synthesis.high_level_synthesis.DefaultSynthesisLinearFunction" />

`qiskit.transpiler.passes.synthesis.high_level_synthesis.DefaultSynthesisLinearFunction`[GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/transpiler/passes/synthesis/high_level_synthesis.py "view source code")

Bases: [`HighLevelSynthesisPlugin`](qiskit.transpiler.passes.synthesis.plugin.HighLevelSynthesisPlugin "qiskit.transpiler.passes.synthesis.plugin.HighLevelSynthesisPlugin")

The default linear function synthesis plugin.

This plugin name is :`linear_function.default` which can be used as the key on an [`HLSConfig`](qiskit.transpiler.passes.HLSConfig "qiskit.transpiler.passes.synthesis.high_level_synthesis.HLSConfig") object to use this method with [`HighLevelSynthesis`](qiskit.transpiler.passes.HighLevelSynthesis "qiskit.transpiler.passes.synthesis.high_level_synthesis.HighLevelSynthesis").

## Methods

### run

<span id="qiskit.transpiler.passes.synthesis.high_level_synthesis.DefaultSynthesisLinearFunction.run" />

`run(high_level_object, coupling_map=None, target=None, qubits=None, **options)`

Run synthesis for the given LinearFunction.

