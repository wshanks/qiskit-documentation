---
title: ImaginaryEvolver
description: API reference for qiskit.algorithms.ImaginaryEvolver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.ImaginaryEvolver
---

# ImaginaryEvolver

<span id="qiskit.algorithms.ImaginaryEvolver" />

`ImaginaryEvolver`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.21/qiskit/algorithms/evolvers/imaginary_evolver.py "view source code")

Bases: `abc.ABC`

Interface for Quantum Imaginary Time Evolution.

## Methods

### evolve

<span id="qiskit.algorithms.ImaginaryEvolver.evolve" />

`abstract ImaginaryEvolver.evolve(evolution_problem)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.21/qiskit/algorithms/evolvers/imaginary_evolver.py "view source code")

Perform imaginary time evolution $\exp(-\tau H)|\Psi\rangle$.

Evolves an initial state $|\Psi\rangle$ for an imaginary time $\tau$ under a Hamiltonian $H$, as provided in the `evolution_problem`.

**Parameters**

**evolution\_problem** ([`EvolutionProblem`](qiskit.algorithms.EvolutionProblem "qiskit.algorithms.evolvers.evolution_problem.EvolutionProblem")) – The definition of the evolution problem.

**Return type**

[`EvolutionResult`](qiskit.algorithms.EvolutionResult "qiskit.algorithms.evolvers.evolution_result.EvolutionResult")

**Returns**

Evolution result which includes an evolved quantum state.

