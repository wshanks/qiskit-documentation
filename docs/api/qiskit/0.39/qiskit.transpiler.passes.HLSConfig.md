---
title: HLSConfig
description: API reference for qiskit.transpiler.passes.HLSConfig
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.HLSConfig
---

# HLSConfig

<span id="qiskit.transpiler.passes.HLSConfig" />

`HLSConfig(use_default_on_unspecified=True, **kwargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/transpiler/passes/synthesis/high_level_synthesis.py "view source code")

Bases: `object`

The high-level-synthesis config allows to specify a list of “methods” used by [`HighLevelSynthesis`](qiskit.transpiler.passes.HighLevelSynthesis "qiskit.transpiler.passes.HighLevelSynthesis") transformation pass to synthesize different types of higher-level-objects. A higher-level object is an object of type [`Operation`](qiskit.circuit.Operation "qiskit.circuit.Operation") (e.g., “clifford”, “linear\_function”, etc.), and the list of applicable synthesis methods is strictly tied to the name of the operation. In the config, each method is represented by a pair consisting of a name of the synthesis algorithm and of a dictionary providing additional arguments for this algorithm.

The names of the synthesis algorithms should be declared in `entry_points` for `qiskit.synthesis` in `setup.py`, in the form \<higher-level-object-name>.\<synthesis-method-name>.

The standard higher-level-objects are recommended to have a synthesis method called “default”, which would be called automatically when synthesizing these objects, without having to explicitly set these methods in the config.

To avoid synthesizing a given higher-level-object, one can give it an empty list of methods.

For an explicit example of creating and using such config files, refer to the documentation for [`HighLevelSynthesis`](qiskit.transpiler.passes.HighLevelSynthesis "qiskit.transpiler.passes.HighLevelSynthesis").

Creates a high-level-synthesis config.

**Parameters**

*   **use\_default\_on\_unspecified** (*bool*) – if True, every higher-level-object without an explicitly specified list of methods will be synthesized using the “default” algorithm if it exists.
*   **kwargs** – a dictionary mapping higher-level-objects to lists of synthesis methods.

## Methods

### set\_methods

<span id="qiskit.transpiler.passes.HLSConfig.set_methods" />

`HLSConfig.set_methods(hls_name, hls_methods)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/transpiler/passes/synthesis/high_level_synthesis.py "view source code")

Sets the list of synthesis methods for a given higher-level-object. This overwrites the lists of methods if also set previously.

