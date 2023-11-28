---
title: SPSASamplerGradient
description: API reference for qiskit.algorithms.gradients.SPSASamplerGradient
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.gradients.SPSASamplerGradient
---

# SPSASamplerGradient[¶](#spsasamplergradient "Permalink to this headline")

<span id="qiskit.algorithms.gradients.SPSASamplerGradient" />

`SPSASamplerGradient(sampler, epsilon, batch_size=1, seed=None, options=None)`

Bases: [`qiskit.algorithms.gradients.base_sampler_gradient.BaseSamplerGradient`](qiskit.algorithms.gradients.BaseSamplerGradient "qiskit.algorithms.gradients.base_sampler_gradient.BaseSamplerGradient")

Compute the gradients of the sampling probability by the Simultaneous Perturbation Stochastic Approximation (SPSA) \[1].

**Reference:** \[1] J. C. Spall, Adaptive stochastic approximation by the simultaneous perturbation method in IEEE Transactions on Automatic Control, vol. 45, no. 10, pp. 1839-1853, Oct 2020, [doi: 10.1109/TAC.2000.880982](https://ieeexplore.ieee.org/document/880982).

**Parameters**

*   **sampler** ([*BaseSampler*](qiskit.primitives.BaseSampler "qiskit.primitives.BaseSampler")) – The sampler used to compute the gradients.
*   **epsilon** (*float*) – The offset size for the SPSA gradients.
*   **batch\_size** (*int*) – number of gradients to average.
*   **seed** (*int | None*) – The seed for a random perturbation vector.
*   **options** ([*Options*](qiskit.providers.Options "qiskit.providers.Options") *| None*) – Primitive backend runtime options used for circuit execution. The order of priority is: options in `run` method > gradient’s default options > primitive’s default setting. Higher priority setting overrides lower priority setting

**Raises**

**ValueError** – If `epsilon` is not positive.

## Methods

### run

<span id="qiskit.algorithms.gradients.SPSASamplerGradient.run" />

`SPSASamplerGradient.run(circuits, parameter_values, parameters=None, **options)`

Run the job of the sampler gradient on the given circuits.

**Parameters**

*   **circuits** – The list of quantum circuits to compute the gradients.
*   **parameter\_values** – The list of parameter values to be bound to the circuit.
*   **parameters** – The sequence of parameters to calculate only the gradients of the specified parameters. Each sequence of parameters corresponds to a circuit in `circuits`. Defaults to None, which means that the gradients of all parameters in each circuit are calculated.
*   **options** – Primitive backend runtime options used for circuit execution. The order of priority is: options in `run` method > gradient’s default options > primitive’s default setting. Higher priority setting overrides lower priority setting

**Returns**

The job object of the gradients of the sampling probability. The i-th result corresponds to `circuits[i]` evaluated with parameters bound as `parameter_values[i]`. The j-th quasi-probability distribution in the i-th result corresponds to the gradients of the sampling probability for the j-th parameter in `circuits[i]`.

**Raises**

**ValueError** – Invalid arguments are given.

### update\_default\_options

<span id="qiskit.algorithms.gradients.SPSASamplerGradient.update_default_options" />

`SPSASamplerGradient.update_default_options(**options)`

Update the gradient’s default options setting.

**Parameters**

**\*\*options** – The fields to update the default options.

## Attributes

<span id="qiskit.algorithms.gradients.SPSASamplerGradient.options" />

### options

Return the union of sampler options setting and gradient default options, where, if the same field is set in both, the gradient’s default options override the primitive’s default setting.

**Return type**

[`Options`](qiskit.providers.Options "qiskit.providers.options.Options")

**Returns**

The gradient default + sampler options.
