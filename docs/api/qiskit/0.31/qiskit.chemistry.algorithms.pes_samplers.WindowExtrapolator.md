---
title: WindowExtrapolator
description: API reference for qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator
---

# WindowExtrapolator

<span id="qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator" />

`WindowExtrapolator(extrapolator=None, window=2)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/algorithms/pes_samplers/extrapolator.py "view source code")

Bases: `qiskit.chemistry.algorithms.pes_samplers.extrapolator.Extrapolator`

An extrapolator which wraps another extrapolator, limiting the internal extrapolator’s ground truth parameter set to a fixed window size.

Constructor.

**Parameters**

*   **extrapolator** (`Union`\[`PolynomialExtrapolator`, `DifferentialExtrapolator`, `None`]) – ‘internal’ extrapolator that performs extrapolation on variational parameters based on data window
*   **window** (`int`) – Number of previous points to use for extrapolation. A value of zero indicates that all previous points will be used for bootstrapping.

## Methods

### extrapolate

<span id="qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.extrapolate" />

`WindowExtrapolator.extrapolate(points, param_dict)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/algorithms/pes_samplers/extrapolator.py "view source code")

Extrapolate at specified point of interest given a set of variational parameters. Based on the specified window, a subset of the data points will be used for extrapolation. A default window of 2 points is used, while a value of zero indicates that all previous points will be used for extrapolation. This method defines the data window before performing the internal extrapolation.

**Parameters**

*   **points** (`List`\[`float`]) – List of point(s) to be used for extrapolation. Can represent some degree of freedom, ex, interatomic distance.
*   **param\_dict** (`Optional`\[`Dict`\[`float`, `List`\[`float`]]]) – Dictionary of variational parameters. Each key is the point and the value is a list of the variational parameters.

**Return type**

`Dict`\[`float`, `List`\[`float`]]

**Returns**

Dictionary of variational parameters for extrapolated point(s).

### factory

<span id="qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.factory" />

`static WindowExtrapolator.factory(mode, **kwargs)`

Factory method for constructing extrapolators.

**Parameters**

*   **mode** (`str`) – Extrapolator to instantiate. Can be one of: - ‘window’ - ‘poly’ - ‘diff\_model’ - ‘pca’ - ‘l1’
*   **kwargs** – arguments to be passed to the constructor of an extrapolator

**Return type**

`Extrapolator`

**Returns**

A newly created extrapolator instance.

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if specified mode is unknown.

## Attributes

<span id="qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.extrapolator" />

### extrapolator

Returns the internal extrapolator.

**Return type**

`Extrapolator`

**Returns**

The internal extrapolator.

<span id="qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.window" />

### window

Returns the size of the window.

**Return type**

`int`

**Returns**

The size of the window.

