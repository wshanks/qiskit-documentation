---
title: AerPauliExpectation
description: API reference for qiskit.opflow.expectations.AerPauliExpectation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.expectations.AerPauliExpectation
---

# AerPauliExpectation

<span id="qiskit.opflow.expectations.AerPauliExpectation" />

`AerPauliExpectation`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/expectations/aer_pauli_expectation.py "view source code")

Bases: [`ExpectationBase`](qiskit.opflow.expectations.ExpectationBase "qiskit.opflow.expectations.expectation_base.ExpectationBase")

Deprecated: An Expectation converter for using Aer’s operator snapshot to take expectations of quantum state circuits over Pauli observables.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.expectations.aer_pauli_expectation.AerPauliExpectation` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

## Methods Defined Here

<span id="qiskit-opflow-expectations-aerpauliexpectation-compute-variance" />

### compute\_variance

<span id="qiskit.opflow.expectations.AerPauliExpectation.compute_variance" />

`AerPauliExpectation.compute_variance(exp_op)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/expectations/aer_pauli_expectation.py "view source code")

Compute the variance of the expectation estimator. Because Aer takes this expectation with matrix multiplication, the estimation is exact and the variance is always 0, but we need to return those values in a way which matches the Operator’s structure.

**Parameters**

**exp\_op** ([*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – The full expectation value Operator after sampling.

**Returns**

The variances or lists thereof (if exp\_op contains ListOps) of the expectation value estimation, equal to 0.

**Return type**

list | float

<span id="qiskit-opflow-expectations-aerpauliexpectation-convert" />

### convert

<span id="qiskit.opflow.expectations.AerPauliExpectation.convert" />

`AerPauliExpectation.convert(operator)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/expectations/aer_pauli_expectation.py "view source code")

Accept an Operator and return a new Operator with the Pauli measurements replaced by AerSnapshot-based expectation circuits.

**Parameters**

**operator** ([*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – The operator to convert. If it contains non-hermitian terms, the operator is decomposed into hermitian and anti-hermitian parts.

**Returns**

The converted operator.

**Return type**

[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")

