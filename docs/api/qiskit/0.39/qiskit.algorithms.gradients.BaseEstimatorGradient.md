---
title: BaseEstimatorGradient
description: API reference for qiskit.algorithms.gradients.BaseEstimatorGradient
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.gradients.BaseEstimatorGradient
---

# BaseEstimatorGradient

<span id="qiskit.algorithms.gradients.BaseEstimatorGradient" />

`BaseEstimatorGradient(estimator, options=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/algorithms/gradients/base_estimator_gradient.py "view source code")

Bases: `abc.ABC`

Base class for an `EstimatorGradient` to compute the gradients of the expectation value.

**Parameters**

*   **estimator** ([*BaseEstimator*](qiskit.primitives.BaseEstimator "qiskit.primitives.BaseEstimator")) – The estimator used to compute the gradients.
*   **options** ([*Options*](qiskit.providers.Options "qiskit.providers.Options") *| None*) – Primitive backend runtime options used for circuit execution. The order of priority is: options in `run` method > gradient’s default options > primitive’s default setting. Higher priority setting overrides lower priority setting

## Methods

### run

<span id="qiskit.algorithms.gradients.BaseEstimatorGradient.run" />

`BaseEstimatorGradient.run(circuits, observables, parameter_values, parameters=None, **options)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/algorithms/gradients/base_estimator_gradient.py "view source code")

Run the job of the estimator gradient on the given circuits.

**Parameters**

*   **circuits** – The list of quantum circuits to compute the gradients.
*   **observables** – The list of observables.
*   **parameter\_values** – The list of parameter values to be bound to the circuit.
*   **parameters** – The sequence of parameters to calculate only the gradients of the specified parameters. Each sequence of parameters corresponds to a circuit in `circuits`. Defaults to None, which means that the gradients of all parameters in each circuit are calculated.
*   **options** – Primitive backend runtime options used for circuit execution. The order of priority is: options in `run` method > gradient’s default options > primitive’s default setting. Higher priority setting overrides lower priority setting

**Returns**

The job object of the gradients of the expectation values. The i-th result corresponds to `circuits[i]` evaluated with parameters bound as `parameter_values[i]`. The j-th element of the i-th result corresponds to the gradient of the i-th circuit with respect to the j-th parameter.

**Raises**

**ValueError** – Invalid arguments are given.

### update\_default\_options

<span id="qiskit.algorithms.gradients.BaseEstimatorGradient.update_default_options" />

`BaseEstimatorGradient.update_default_options(**options)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/algorithms/gradients/base_estimator_gradient.py "view source code")

Update the gradient’s default options setting.

**Parameters**

**\*\*options** – The fields to update the default options.

## Attributes

<span id="qiskit.algorithms.gradients.BaseEstimatorGradient.options" />

### options

Return the union of estimator options setting and gradient default options, where, if the same field is set in both, the gradient’s default options override the primitive’s default setting.

**Return type**

[`Options`](qiskit.providers.Options "qiskit.providers.options.Options")

**Returns**

The gradient default + estimator options.

