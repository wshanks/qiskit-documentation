---
title: state_fidelities
description: API reference for qiskit.algorithms.state_fidelities
in_page_toc_min_heading_level: 1
python_api_type: module
python_api_name: qiskit.algorithms.state_fidelities
---

<span id="qiskit-algorithms-state-fidelities" />

# qiskit.algorithms.state\_fidelities

## State Fidelity Interfaces

<span id="module-qiskit.algorithms.state_fidelities" />

`qiskit.algorithms.state_fidelities`

### State Fidelities

|                                                                                                                                                      |                                                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`BaseStateFidelity`](qiskit.algorithms.state_fidelities.BaseStateFidelity "qiskit.algorithms.state_fidelities.BaseStateFidelity")()                 | An interface to calculate state fidelities (state overlaps) for pairs of (parametrized) quantum circuits.                                                                   |
| [`ComputeUncompute`](qiskit.algorithms.state_fidelities.ComputeUncompute "qiskit.algorithms.state_fidelities.ComputeUncompute")(sampler\[, options]) | This class leverages the sampler primitive to calculate the state fidelity of two quantum circuits following the compute-uncompute method (see \[1] for further reference). |

### Results

> |                                                                                                                                                           |                                                             |
> | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
> | [`StateFidelityResult`](qiskit.algorithms.state_fidelities.StateFidelityResult "qiskit.algorithms.state_fidelities.StateFidelityResult")(fidelities, ...) | This class stores the result of StateFidelity computations. |

