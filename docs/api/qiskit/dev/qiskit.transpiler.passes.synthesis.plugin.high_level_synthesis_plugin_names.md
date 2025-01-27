---
title: high_level_synthesis_plugin_names
description: API reference for qiskit.transpiler.passes.synthesis.plugin.high_level_synthesis_plugin_names
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.transpiler.passes.synthesis.plugin.high_level_synthesis_plugin_names
---

<span id="qiskit-transpiler-passes-synthesis-plugin-high-level-synthesis-plugin-names" />

# qiskit.transpiler.passes.synthesis.plugin.high\_level\_synthesis\_plugin\_names

<span id="qiskit.transpiler.passes.synthesis.plugin.high_level_synthesis_plugin_names" />

`qiskit.transpiler.passes.synthesis.plugin.high_level_synthesis_plugin_names(op_name)`[GitHub](https://github.com/qiskit/qiskit/tree/main/qiskit/transpiler/passes/synthesis/plugin.py "view source code")

Return a list of plugin names installed for a given high level object name

**Parameters**

**op\_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – The operation name to find the installed plugins for. For example, if you provide `"clifford"` as the input it will find all the installed clifford synthesis plugins that can synthesize [`Clifford`](qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford") objects. The name refers to the [`Operation.name`](qiskit.circuit.Operation#name "qiskit.circuit.Operation.name") attribute of the relevant objects.

**Returns**

A list of installed plugin names for the specified high level operation

**Return type**

[*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")\[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")]

