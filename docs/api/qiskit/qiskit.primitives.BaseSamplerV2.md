---
title: BaseSamplerV2
description: API reference for qiskit.primitives.BaseSamplerV2
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.primitives.BaseSamplerV2
---

# BaseSamplerV2

<span id="qiskit.primitives.BaseSamplerV2" />

`qiskit.primitives.BaseSamplerV2`[GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/primitives/base/base_sampler.py "view source code")

Bases: [`ABC`](https://docs.python.org/3/library/abc.html#abc.ABC "(in Python v3.12)")

Sampler V2 base class.

A Sampler returns samples of quantum circuit outputs.

All sampler implementations must implement default value for the `shots` in the [`run()`](#qiskit.primitives.BaseSamplerV2.run "qiskit.primitives.BaseSamplerV2.run") method if `None` is given both as a `kwarg` and in all of the pubs.

## Methods

### run

<span id="qiskit.primitives.BaseSamplerV2.run" />

`abstract run(pubs, *, shots=None)`

Run and collect samples from each pub.

**Parameters**

*   **pubs** (*Iterable\[SamplerPubLike]*) – An iterable of pub-like objects. For example, a list of circuits or tuples `(circuit, parameter_values)`.
*   **shots** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)") *| None*) – The total number of shots to sample for each sampler pub that does not specify its own shots. If `None`, the primitive’s default shots value will be used, which can vary by implementation.

**Returns**

The job object of Sampler’s result.

**Return type**

[BasePrimitiveJob](qiskit.primitives.BasePrimitiveJob "qiskit.primitives.BasePrimitiveJob")\[[PrimitiveResult](qiskit.primitives.PrimitiveResult "qiskit.primitives.PrimitiveResult")\[[PubResult](qiskit.primitives.PubResult "qiskit.primitives.PubResult")]]

