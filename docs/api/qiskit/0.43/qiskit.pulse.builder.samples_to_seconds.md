---
title: samples_to_seconds
description: API reference for qiskit.pulse.builder.samples_to_seconds
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.pulse.builder.samples_to_seconds
---

<span id="qiskit-pulse-builder-samples-to-seconds" />

# qiskit.pulse.builder.samples\_to\_seconds

<span id="qiskit.pulse.builder.samples_to_seconds" />

`samples_to_seconds(samples)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/pulse/builder.py "view source code")

Obtain the time in seconds that will elapse for the input number of samples on the active backend.

**Parameters**

**samples** (*int |* [*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.25)")) – Number of samples to convert to time in seconds.

**Returns**

The time that elapses in `samples`.

**Return type**

float | [*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.25)")

