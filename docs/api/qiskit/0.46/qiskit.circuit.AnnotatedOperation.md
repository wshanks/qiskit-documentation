---
title: AnnotatedOperation
description: API reference for qiskit.circuit.AnnotatedOperation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.AnnotatedOperation
---

# AnnotatedOperation

<span id="qiskit.circuit.AnnotatedOperation" />

`qiskit.circuit.AnnotatedOperation(base_op, modifiers)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/circuit/annotated_operation.py "view source code")

Bases: [`Operation`](qiskit.circuit.Operation "qiskit.circuit.operation.Operation")

Annotated operation.

Create a new AnnotatedOperation.

An “annotated operation” allows to add a list of modifiers to the “base” operation. For now, the only supported modifiers are of types [`InverseModifier`](qiskit.circuit.InverseModifier "qiskit.circuit.InverseModifier"), [`ControlModifier`](qiskit.circuit.ControlModifier "qiskit.circuit.ControlModifier") and [`PowerModifier`](qiskit.circuit.PowerModifier "qiskit.circuit.PowerModifier").

An annotated operation can be viewed as an extension of [`ControlledGate`](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate") (which also allows adding control to the base operation). However, an important difference is that the circuit definition of an annotated operation is not constructed when the operation is declared, and instead happens during transpilation, specifically during the [`HighLevelSynthesis`](qiskit.transpiler.passes.HighLevelSynthesis "qiskit.transpiler.passes.HighLevelSynthesis") transpiler pass.

An annotated operation can be also viewed as a “higher-level” or “more abstract” object that can be added to a quantum circuit. This enables writing transpiler optimization passes that make use of this higher-level representation, for instance removing a gate that is immediately followed by its inverse.

**Parameters**

*   **base\_op** ([*Operation*](qiskit.circuit.Operation "qiskit.circuit.operation.Operation")) – base operation being modified
*   **modifiers** (*Modifier |* [*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[Modifier]*) – ordered list of modifiers. Supported modifiers include `InverseModifier`, `ControlModifier` and `PowerModifier`.

Examples:

```python
op1 = AnnotatedOperation(SGate(), [InverseModifier(), ControlModifier(2)])

op2_inner = AnnotatedGate(SGate(), InverseModifier())
op2 = AnnotatedGate(op2_inner, ControlModifier(2))
```

Both op1 and op2 are semantically equivalent to an `SGate()` which is first inverted and then controlled by 2 qubits.

## Attributes

<span id="qiskit.circuit.AnnotatedOperation.name" />

### name

Unique string identifier for operation type.

<span id="qiskit.circuit.AnnotatedOperation.num_clbits" />

### num\_clbits

Number of classical bits.

<span id="qiskit.circuit.AnnotatedOperation.num_qubits" />

### num\_qubits

Number of qubits.

## Methods

### copy

<span id="qiskit.circuit.AnnotatedOperation.copy" />

`copy()`

Return a copy of the [`AnnotatedOperation`](#qiskit.circuit.AnnotatedOperation "qiskit.circuit.AnnotatedOperation").

**Return type**

[*AnnotatedOperation*](#qiskit.circuit.AnnotatedOperation "qiskit.circuit.annotated_operation.AnnotatedOperation")

### to\_matrix

<span id="qiskit.circuit.AnnotatedOperation.to_matrix" />

`to_matrix()`

Return a matrix representation (allowing to construct Operator).

