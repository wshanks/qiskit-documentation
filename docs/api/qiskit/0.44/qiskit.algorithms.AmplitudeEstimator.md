---
title: AmplitudeEstimator
description: API reference for qiskit.algorithms.AmplitudeEstimator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.AmplitudeEstimator
---

# AmplitudeEstimator

<span id="qiskit.algorithms.AmplitudeEstimator" />

`qiskit.algorithms.AmplitudeEstimator`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/algorithms/amplitude_estimators/amplitude_estimator.py "view source code")

Bases: [`ABC`](https://docs.python.org/3/library/abc.html#abc.ABC "(in Python v3.12)")

The Amplitude Estimation interface.

## Methods

### estimate

<span id="qiskit.algorithms.AmplitudeEstimator.estimate" />

`abstract estimate(estimation_problem)`

Run the amplitude estimation algorithm.

**Parameters**

**estimation\_problem** ([*EstimationProblem*](qiskit.algorithms.EstimationProblem "qiskit.algorithms.amplitude_estimators.estimation_problem.EstimationProblem")) – An `EstimationProblem` containing all problem-relevant information such as the state preparation and the objective qubits.

**Return type**

[*AmplitudeEstimatorResult*](qiskit.algorithms.AmplitudeEstimatorResult "qiskit.algorithms.amplitude_estimators.amplitude_estimator.AmplitudeEstimatorResult")

