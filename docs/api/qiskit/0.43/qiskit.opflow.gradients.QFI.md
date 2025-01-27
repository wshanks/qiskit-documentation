---
title: QFI
description: API reference for qiskit.opflow.gradients.QFI
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.gradients.QFI
---

# QFI

<span id="qiskit.opflow.gradients.QFI" />

`QFI(qfi_method='lin_comb_full')`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/gradients/qfi.py "view source code")

Bases: [`QFIBase`](qiskit.opflow.gradients.QFIBase "qiskit.opflow.gradients.qfi_base.QFIBase")

Deprecated: Compute the Quantum Fisher Information (QFI).

Computes the QFI given a pure, parameterized quantum state, where QFI is:

$$
\mathrm{QFI}_{kl}= 4 \mathrm{Re}[\langle \partial_k \psi | \partial_l \psi \rangle
    − \langle\partial_k \psi | \psi \rangle \langle\psi | \partial_l \psi \rangle].
$$

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.gradients.qfi.QFI` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

## Methods Defined Here

<span id="qiskit-opflow-gradients-qfi-convert" />

### convert

<span id="qiskit.opflow.gradients.QFI.convert" />

`QFI.convert(operator, params=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/gradients/qfi.py "view source code")

**Parameters**

*   **operator** ([*CircuitStateFn*](qiskit.opflow.state_fns.CircuitStateFn "qiskit.opflow.state_fns.circuit_state_fn.CircuitStateFn")) – The operator corresponding to the quantum state |ψ(ω)〉for which we compute the QFI
*   **params** ([*ParameterVector*](qiskit.circuit.ParameterVector "qiskit.circuit.parametervector.ParameterVector")  *|*[*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression") *| List\[*[*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")*] | None*) – The parameters we are computing the QFI wrt: ω If not explicitly passed, they are inferred from the operator and sorted by name.

**Returns**

ListOp\[ListOp] where the operator at position k,l corresponds to QFI\_kl

**Raises**

**ValueError** – If operator is not parameterized.

**Return type**

[*ListOp*](qiskit.opflow.list_ops.ListOp "qiskit.opflow.list_ops.list_op.ListOp")

## Attributes

<span id="qiskit.opflow.gradients.QFI.qfi_method" />

### qfi\_method

Returns `CircuitQFI`.

**Returns**

`CircuitQFI`.

