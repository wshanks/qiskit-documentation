---
title: AbelianGrouper
description: API reference for qiskit.aqua.operators.converters.AbelianGrouper
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.converters.AbelianGrouper
---

# AbelianGrouper

<span id="qiskit.aqua.operators.converters.AbelianGrouper" />

`AbelianGrouper(traverse=True)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/operators/converters/abelian_grouper.py "view source code")

Bases: `qiskit.aqua.operators.converters.converter_base.ConverterBase`

The AbelianGrouper converts SummedOps into a sum of Abelian sums.

Meaning, it will traverse the Operator, and when it finds a SummedOp, it will evaluate which of the summed sub-Operators commute with one another. It will then convert each of the groups of commuting Operators into their own SummedOps, and return the sum-of-commuting-SummedOps. This is particularly useful for cases where mutually commuting groups can be handled similarly, as in the case of Pauli Expectations, where commuting Paulis have the same diagonalizing circuit rotation, or Pauli Evolutions, where commuting Paulis can be diagonalized together.

**Parameters**

**traverse** (`bool`) – Whether to convert only the Operator passed to `convert`, or traverse down that Operator.

## Methods

### convert

<span id="qiskit.aqua.operators.converters.AbelianGrouper.convert" />

`AbelianGrouper.convert(operator)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/operators/converters/abelian_grouper.py "view source code")

Check if operator is a SummedOp, in which case covert it into a sum of mutually commuting sums, or if the Operator contains sub-Operators and `traverse` is True, attempt to convert any sub-Operators.

**Parameters**

**operator** (`OperatorBase`) – The Operator to attempt to convert.

**Return type**

`OperatorBase`

**Returns**

The converted Operator.

### group\_subops

<span id="qiskit.aqua.operators.converters.AbelianGrouper.group_subops" />

`classmethod AbelianGrouper.group_subops(list_op, fast=None, use_nx=None)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/operators/converters/abelian_grouper.py "view source code")

Given a ListOp, attempt to group into Abelian ListOps of the same type.

**Parameters**

*   **list\_op** (`ListOp`) – The Operator to group into Abelian groups
*   **fast** (`Optional`\[`bool`]) – Ignored - parameter will be removed in future release
*   **use\_nx** (`Optional`\[`bool`]) – Ignored - parameter will be removed in future release

**Return type**

`ListOp`

**Returns**

The grouped Operator.

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If any of list\_op’s sub-ops is not `PauliOp`.

