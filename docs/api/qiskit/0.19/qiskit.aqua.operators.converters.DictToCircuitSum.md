---
title: DictToCircuitSum
description: API reference for qiskit.aqua.operators.converters.DictToCircuitSum
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.converters.DictToCircuitSum
---

# DictToCircuitSum

<span id="qiskit.aqua.operators.converters.DictToCircuitSum" />

`DictToCircuitSum(traverse=True, convert_dicts=True, convert_vectors=True)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/operators/converters/dict_to_circuit_sum.py "view source code")

Converts `DictStateFns` or `VectorStateFns` to equivalent `CircuitStateFns` or sums thereof. The behavior of this class can be mostly replicated by calling `to_circuit_op` on an Operator, but with the added control of choosing whether to convert only `DictStateFns` or `VectorStateFns`, rather than both.

**Parameters**

*   **traverse** (`bool`) – Whether to recurse down into Operators with internal sub-operators for conversion.
*   **convert\_dicts** (`bool`) – Whether to convert VectorStateFn.
*   **convert\_vectors** (`bool`) – Whether to convert DictStateFns.

## Methods

### convert

<span id="qiskit.aqua.operators.converters.DictToCircuitSum.convert" />

`DictToCircuitSum.convert(operator)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/operators/converters/dict_to_circuit_sum.py "view source code")

Convert the Operator to `CircuitStateFns`, recursively if `traverse` is True.

**Parameters**

**operator** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – The Operator to convert

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The converted Operator.

