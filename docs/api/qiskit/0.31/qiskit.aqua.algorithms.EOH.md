---
title: EOH
description: API reference for qiskit.aqua.algorithms.EOH
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.EOH
---

# EOH

<span id="qiskit.aqua.algorithms.EOH" />

`EOH(operator, initial_state, evo_operator, evo_time=1, num_time_slices=1, expansion_mode='trotter', expansion_order=1, quantum_instance=None)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/algorithms/education/eoh.py "view source code")

Bases: `qiskit.aqua.algorithms.quantum_algorithm.QuantumAlgorithm`

The Quantum EOH (Evolution of Hamiltonian) algorithm.

EOH provides the lower-level building blocks for simulating universal quantum systems. For any given quantum system that can be decomposed into local interactions (for example, a global hamiltonian as the weighted sum of several Pauli spin operators), the local interactions can then be used to approximate the global quantum system via, for example, Lloyd’s method or Trotter-Suzuki decomposition.

**Parameters**

*   **operator** (`LegacyBaseOperator`) – Operator to evaluate
*   **initial\_state** (`Union`\[`InitialState`, `QuantumCircuit`]) – Initial state for evolution
*   **evo\_operator** (`LegacyBaseOperator`) – Operator to evolve
*   **evo\_time** (`float`) – Evolution time, has min value of 0
*   **num\_time\_slices** (`int`) – Number of time slices, has minimum value of 1
*   **expansion\_mode** (`str`) – Either `"trotter"` (Lloyd’s method) or `"suzuki"` (for Trotter-Suzuki expansion)
*   **expansion\_order** (`int`) – The Trotter-Suzuki expansion order.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

## Methods

### construct\_circuit

<span id="qiskit.aqua.algorithms.EOH.construct_circuit" />

`EOH.construct_circuit()`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/algorithms/education/eoh.py "view source code")

Construct the circuit.

**Returns**

the circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### run

<span id="qiskit.aqua.algorithms.EOH.run" />

`EOH.run(quantum_instance=None, **kwargs)`

Execute the algorithm with selected backend.

**Parameters**

*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – the experimental setting.
*   **kwargs** (*dict*) – kwargs

**Returns**

results of an algorithm.

**Return type**

dict

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If a quantum instance or backend has not been provided

### set\_backend

<span id="qiskit.aqua.algorithms.EOH.set_backend" />

`EOH.set_backend(backend, **kwargs)`

Sets backend with configuration.

**Return type**

`None`

## Attributes

<span id="qiskit.aqua.algorithms.EOH.backend" />

### backend

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

<span id="qiskit.aqua.algorithms.EOH.quantum_instance" />

### quantum\_instance

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

<span id="qiskit.aqua.algorithms.EOH.random" />

### random

Return a numpy random.

