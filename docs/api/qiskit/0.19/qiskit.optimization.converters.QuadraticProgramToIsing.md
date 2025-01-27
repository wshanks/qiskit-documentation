---
title: QuadraticProgramToIsing
description: API reference for qiskit.optimization.converters.QuadraticProgramToIsing
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.converters.QuadraticProgramToIsing
---

# QuadraticProgramToIsing

<span id="qiskit.optimization.converters.QuadraticProgramToIsing" />

`QuadraticProgramToIsing`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/optimization/converters/quadratic_program_to_ising.py "view source code")

Convert an optimization problem into a qubit operator.

Initialize the internal data structure.

## Methods

### encode

<span id="qiskit.optimization.converters.QuadraticProgramToIsing.encode" />

`QuadraticProgramToIsing.encode(op)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/optimization/converters/quadratic_program_to_ising.py "view source code")

Convert a problem into a qubit operator

**Parameters**

**op** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The optimization problem to be converted. Must be an unconstrained problem with binary variables only.

**Return type**

`Tuple`\[[`WeightedPauliOperator`](qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.weighted_pauli_operator.WeightedPauliOperator"), `float`]

**Returns**

The qubit operator of the problem and the shift value.

**Raises**

*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If a variable type is not binary.
*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If constraints exist in the problem.

