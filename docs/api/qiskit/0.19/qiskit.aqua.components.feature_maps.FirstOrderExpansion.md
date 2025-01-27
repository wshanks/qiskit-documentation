---
title: FirstOrderExpansion
description: API reference for qiskit.aqua.components.feature_maps.FirstOrderExpansion
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.feature_maps.FirstOrderExpansion
---

# FirstOrderExpansion

<span id="qiskit.aqua.components.feature_maps.FirstOrderExpansion" />

`FirstOrderExpansion(feature_dimension, depth=2, data_map_func=<function self_product>)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/components/feature_maps/first_order_expansion.py "view source code")

DEPRECATED. First Order Expansion feature map.

This is a sub-class of [`PauliZExpansion`](qiskit.aqua.components.feature_maps.PauliZExpansion "qiskit.aqua.components.feature_maps.PauliZExpansion") where *z\_order* is fixed at 1. As a result the first order expansion will be a feature map without entangling gates.

**Parameters**

*   **feature\_dimension** (`int`) – The number of features
*   **depth** (`int`) – The number of repeated circuits. Defaults to 2, has a minimum value of 1.
*   **data\_map\_func** (`Callable`\[\[`ndarray`], `float`]) – A mapping function for data x which can be supplied to override the default mapping from [`self_product()`](qiskit.aqua.components.feature_maps.self_product "qiskit.aqua.components.feature_maps.self_product").

## Attributes

### feature\_dimension

returns feature dimension

### num\_qubits

returns number of qubits

### support\_parameterized\_circuit

returns whether or not the sub-class support parameterized circuit

## Methods

### construct\_circuit

<span id="qiskit.aqua.components.feature_maps.FirstOrderExpansion.construct_circuit" />

`FirstOrderExpansion.construct_circuit(x, qr=None, inverse=False)`

Construct the second order expansion based on given data.

**Parameters**

*   **x** (*Union(numpy.ndarray, list\[*[*Parameter*](qiskit.circuit.Parameter "qiskit.circuit.Parameter")*],* [*ParameterVector*](qiskit.circuit.ParameterVector "qiskit.circuit.ParameterVector")*)*) – 1-D to-be-transformed data.
*   **qr** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*, optional*) – the QuantumRegister object for the circuit, if None, generate new registers with name q.
*   **inverse** (*bool, optional*) – whether or not inverse the circuit

**Returns**

a quantum circuit transform data x.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

*   **TypeError** – invalid input
*   **ValueError** – invalid input

### get\_entangler\_map

<span id="qiskit.aqua.components.feature_maps.FirstOrderExpansion.get_entangler_map" />

`static FirstOrderExpansion.get_entangler_map(map_type, num_qubits)`

get entangle map

### validate\_entangler\_map

<span id="qiskit.aqua.components.feature_maps.FirstOrderExpansion.validate_entangler_map" />

`static FirstOrderExpansion.validate_entangler_map(entangler_map, num_qubits)`

validate entangler map

