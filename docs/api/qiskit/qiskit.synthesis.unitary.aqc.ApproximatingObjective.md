---
title: ApproximatingObjective
description: API reference for qiskit.synthesis.unitary.aqc.ApproximatingObjective
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.synthesis.unitary.aqc.ApproximatingObjective
---

# ApproximatingObjective

<span id="qiskit.synthesis.unitary.aqc.ApproximatingObjective" />

`qiskit.synthesis.unitary.aqc.ApproximatingObjective`[GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/synthesis/unitary/aqc/approximate.py "view source code")

Bases: [`ABC`](https://docs.python.org/3/library/abc.html#abc.ABC "(in Python v3.12)")

A base class for an optimization problem definition. An implementing class must provide at least an implementation of the `objective` method. In such case only gradient free optimizers can be used. Both method, `objective` and `gradient`, preferable to have in an implementation.

## Attributes

<span id="qiskit.synthesis.unitary.aqc.ApproximatingObjective.num_thetas" />

### num\_thetas

Returns: the number of parameters in this optimization problem.

<span id="qiskit.synthesis.unitary.aqc.ApproximatingObjective.target_matrix" />

### target\_matrix

Returns: a matrix being approximated

## Methods

### gradient

<span id="qiskit.synthesis.unitary.aqc.ApproximatingObjective.gradient" />

`abstract gradient(param_values)`

Computes a gradient with respect to parameters given a vector of parameter values.

**Parameters**

**param\_values** ([*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.26)")) – a vector of parameter values for the optimization problem.

**Returns**

an array of gradient values.

**Return type**

[*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.26)")

### objective

<span id="qiskit.synthesis.unitary.aqc.ApproximatingObjective.objective" />

`abstract objective(param_values)`

Computes a value of the objective function given a vector of parameter values.

**Parameters**

**param\_values** ([*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.26)")) – a vector of parameter values for the optimization problem.

**Returns**

a float value of the objective function.

**Return type**

[*SupportsFloat*](https://docs.python.org/3/library/typing.html#typing.SupportsFloat "(in Python v3.12)")

