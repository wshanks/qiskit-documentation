---
title: EvolutionBase
description: API reference for qiskit.opflow.evolutions.EvolutionBase
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.evolutions.EvolutionBase
---

# EvolutionBase

<span id="qiskit.opflow.evolutions.EvolutionBase" />

`qiskit.opflow.evolutions.EvolutionBase`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/opflow/evolutions/evolution_base.py "view source code")

Bases: [`ConverterBase`](qiskit.opflow.converters.ConverterBase "qiskit.opflow.converters.converter_base.ConverterBase"), [`ABC`](https://docs.python.org/3/library/abc.html#abc.ABC "(in Python v3.12)")

Deprecated: A base for Evolution converters. Evolutions are converters which traverse an Operator tree, replacing any `EvolvedOp` e with a Schrodinger equation-style evolution `CircuitOp` equalling or approximating the matrix exponential of -i \* the Operator contained inside (e.primitive). The Evolutions are essentially implementations of Hamiltonian Simulation algorithms, including various methods for Trotterization.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.evolutions.evolution_base.EvolutionBase` is deprecated as of qiskit-terra 0.24.0. It will be removed in the Qiskit 1.0 release. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

## Methods

### convert

<span id="qiskit.opflow.evolutions.EvolutionBase.convert" />

`abstract convert(operator)`

Traverse the operator, replacing any `EvolutionOps` with their equivalent evolution `CircuitOps`.

> **Args:**
>
> operator: The Operator to convert.

**Returns**

The converted Operator, with `EvolutionOps` replaced by `CircuitOps`.

**Return type**

[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")

