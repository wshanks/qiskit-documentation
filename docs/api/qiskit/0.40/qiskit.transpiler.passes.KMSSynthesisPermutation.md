---
title: KMSSynthesisPermutation
description: API reference for qiskit.transpiler.passes.KMSSynthesisPermutation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.KMSSynthesisPermutation
---

# KMSSynthesisPermutation

<span id="qiskit.transpiler.passes.KMSSynthesisPermutation" />

`KMSSynthesisPermutation`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/transpiler/passes/synthesis/high_level_synthesis.py "view source code")

Bases: [`qiskit.transpiler.passes.synthesis.plugin.HighLevelSynthesisPlugin`](qiskit.transpiler.passes.synthesis.plugin.HighLevelSynthesisPlugin "qiskit.transpiler.passes.synthesis.plugin.HighLevelSynthesisPlugin")

The permutation synthesis plugin based on the Kutin, Moulton, Smithline method.

This plugin can be accessed by the `kms` method name in the `HLSConfig` for `permutation`. For example:

```python
from qiskit.circuit import QuantumCircuit
from qiskit.circuit.library import PermutationGate
from qiskit.transpiler import PassManager
from qiskit.transpiler.passes.synthesis.high_level_synthesis import HLSConfig, HighLevelSynthesis
from qiskit.transpiler.passes.synthesis.plugin import HighLevelSynthesisPluginManager

# Create a permutation and add it to a quantum circuit
perm = PermutationGate([4, 6, 3, 7, 1, 2, 0, 5])
qc = QuantumCircuit(8)
qc.append(perm, range(8))

# KMSSynthesisPermutation plugin for permutations
# Returns a quantum circuit with size 18 and depth 6
# but adhering to the linear nearest-neighbor architecture.
qct = PassManager(HighLevelSynthesis(HLSConfig(permutation=[("kms", {})]))).run(qc)
print(f"kms: {qct.size() = }, {qct.depth() = }")
```

## Methods

### run

<span id="qiskit.transpiler.passes.KMSSynthesisPermutation.run" />

`KMSSynthesisPermutation.run(high_level_object, **options)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/transpiler/passes/synthesis/high_level_synthesis.py "view source code")

Run synthesis for the given Permutation.

