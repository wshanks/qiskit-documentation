---
title: CircuitSampler
description: API reference for qiskit.aqua.operators.converters.CircuitSampler
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.converters.CircuitSampler
---

# CircuitSampler

<span id="qiskit.aqua.operators.converters.CircuitSampler" />

`CircuitSampler(backend=None, statevector=None, param_qobj=False, attach_results=False)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/operators/converters/circuit_sampler.py "view source code")

The CircuitSampler traverses an Operator and converts any CircuitStateFns into approximations of the state function by a DictStateFn or VectorStateFn using a quantum backend. Note that in order to approximate the value of the CircuitStateFn, it must 1) send state function through a depolarizing channel, which will destroy all phase information and 2) replace the sampled frequencies with **square roots** of the frequency, rather than the raw probability of sampling (which would be the equivalent of sampling the **square** of the state function, per the Born rule.

The CircuitSampler aggressively caches transpiled circuits to handle re-parameterization of the same circuit efficiently. If you are converting multiple different Operators, you are better off using a different CircuitSampler for each Operator to avoid cache thrashing.

**Parameters**

*   **backend** (`Union`\[[`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend"), [`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance"), `None`]) – The quantum backend or QuantumInstance to use to sample the circuits.
*   **statevector** (`Optional`\[`bool`]) – If backend is a statevector backend, whether to replace the CircuitStateFns with DictStateFns (from the counts) or VectorStateFns (from the statevector). `None` will set this argument automatically based on the backend.
*   **param\_qobj** (`bool`) – (TODO, not yet available) Whether to use Aer’s parameterized Qobj capability to avoid re-assembling the circuits.
*   **attach\_results** (`bool`) – Whether to attach the data from the backend `Results` object for a given `` CircuitStateFn` `` to an `execution_results` field added the converted `DictStateFn` or `VectorStateFn`.

**Raises**

**ValueError** – Set statevector or param\_qobj True when not supported by backend.

## Attributes

### backend

<span id="qiskit.aqua.operators.converters.CircuitSampler.backend" />

`qiskit.providers.basebackend.BaseBackend`

Returns the backend.

**Return type**

[`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend")

**Returns**

The backend used by the CircuitSampler

### quantum\_instance

<span id="qiskit.aqua.operators.converters.CircuitSampler.quantum_instance" />

`qiskit.aqua.quantum_instance.QuantumInstance`

Returns the quantum instance.

**Return type**

[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance")

**Returns**

The QuantumInstance used by the CircuitSampler

## Methods

### convert

<span id="qiskit.aqua.operators.converters.CircuitSampler.convert" />

`CircuitSampler.convert(operator, params=None)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/operators/converters/circuit_sampler.py "view source code")

Converts the Operator to one in which the CircuitStateFns are replaced by DictStateFns or VectorStateFns. Extracts the CircuitStateFns out of the Operator, caches them, calls `sample_circuits` below to get their converted replacements, and replaces the CircuitStateFns in operator with the replacement StateFns.

**Parameters**

*   **operator** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – The Operator to convert
*   **params** (`Optional`\[`Dict`\[`Union`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), [`ParameterVector`](qiskit.circuit.ParameterVector "qiskit.circuit.parametervector.ParameterVector")], `Union`\[`float`, `List`\[`float`], `List`\[`List`\[`float`]]]]]) – A dictionary mapping parameters to either single binding values or lists of binding values. The dictionary can also contain pairs of ParameterVectors with lists of parameters or lists of lists of parameters to bind to them.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The converted Operator with CircuitStateFns replaced by DictStateFns or VectorStateFns.

### sample\_circuits

<span id="qiskit.aqua.operators.converters.CircuitSampler.sample_circuits" />

`CircuitSampler.sample_circuits(circuit_sfns=None, param_bindings=None)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/operators/converters/circuit_sampler.py "view source code")

Samples the CircuitStateFns and returns a dict associating their `id()` values to their replacement DictStateFn or VectorStateFn. If param\_bindings is provided, the CircuitStateFns are broken into their parameterizations, and a list of StateFns is returned in the dict for each circuit `id()`. Note that param\_bindings is provided here in a different format than in `convert`, and lists of parameters within the dict is not supported, and only binding dicts which are valid to be passed into Terra can be included in this list.

**Parameters**

*   **circuit\_sfns** (`Optional`\[`List`\[[`CircuitStateFn`](qiskit.aqua.operators.state_fns.CircuitStateFn "qiskit.aqua.operators.state_fns.circuit_state_fn.CircuitStateFn")]]) – The list of CircuitStateFns to sample.
*   **param\_bindings** (`Optional`\[`List`\[`Dict`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `List`\[`float`]]]]) – The parameterizations to bind to each CircuitStateFn.

**Return type**

`Dict`\[`int`, `Union`\[[`StateFn`](qiskit.aqua.operators.state_fns.StateFn "qiskit.aqua.operators.state_fns.state_fn.StateFn"), `List`\[[`StateFn`](qiskit.aqua.operators.state_fns.StateFn "qiskit.aqua.operators.state_fns.state_fn.StateFn")]]]

**Returns**

The dictionary mapping ids of the CircuitStateFns to their replacement StateFns.

### set\_backend

<span id="qiskit.aqua.operators.converters.CircuitSampler.set_backend" />

`CircuitSampler.set_backend(backend, **kwargs)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/operators/converters/circuit_sampler.py "view source code")

Sets backend with configuration.

**Raises**

**ValueError** – statevector or param\_qobj are True when not supported by backend.

**Return type**

`None`

