---
title: Constant
description: API reference for qiskit.pulse.library.Constant
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.library.Constant
---

<span id="qiskit-pulse-library-constant" />

# qiskit.pulse.library.Constant

<span id="qiskit.pulse.library.Constant" />

`Constant(duration, amp, name=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.16/qiskit/pulse/library/parametric_pulses.py "view source code")

A simple constant pulse, with an amplitude value and a duration:

$$
f(x) = amp    ,  0 <= x < duration
f(x) = 0      ,  elsewhere
$$

Initialize the constant-valued pulse.

**Parameters**

*   **duration** (`int`) – Pulse length in terms of the the sampling period dt.
*   **amp** (`Union`\[`complex`, `ParameterExpression`]) – The amplitude of the constant square pulse.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.

### \_\_init\_\_

<span id="qiskit.pulse.library.Constant.__init__" />

`__init__(duration, amp, name=None)`

Initialize the constant-valued pulse.

**Parameters**

*   **duration** (`int`) – Pulse length in terms of the the sampling period dt.
*   **amp** (`Union`\[`complex`, `ParameterExpression`]) – The amplitude of the constant square pulse.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.

## Methods

|                                                                                                                                        |                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`__init__`](#qiskit.pulse.library.Constant.__init__ "qiskit.pulse.library.Constant.__init__")(duration, amp\[, name])                 | Initialize the constant-valued pulse.                                                                                          |
| [`assign_parameters`](#qiskit.pulse.library.Constant.assign_parameters "qiskit.pulse.library.Constant.assign_parameters")(value\_dict) | Return a new ParametricPulse with parameters assigned.                                                                         |
| [`draw`](#qiskit.pulse.library.Constant.draw "qiskit.pulse.library.Constant.draw")(\[dt, style, filename, interp\_method, …])          | Plot the pulse.                                                                                                                |
| [`get_sample_pulse`](#qiskit.pulse.library.Constant.get_sample_pulse "qiskit.pulse.library.Constant.get_sample_pulse")()               | Deprecated.                                                                                                                    |
| [`get_waveform`](#qiskit.pulse.library.Constant.get_waveform "qiskit.pulse.library.Constant.get_waveform")()                           | Return a Waveform with samples filled according to the formula that the pulse represents and the parameter values it contains. |
| [`validate_parameters`](#qiskit.pulse.library.Constant.validate_parameters "qiskit.pulse.library.Constant.validate_parameters")()      | Validate parameters.                                                                                                           |

## Attributes

|                                                                                                      |                                                        |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [`amp`](#qiskit.pulse.library.Constant.amp "qiskit.pulse.library.Constant.amp")                      | The constant value amplitude.                          |
| [`id`](#qiskit.pulse.library.Constant.id "qiskit.pulse.library.Constant.id")                         | Unique identifier for this pulse.                      |
| [`parameters`](#qiskit.pulse.library.Constant.parameters "qiskit.pulse.library.Constant.parameters") | Return a dictionary containing the pulse’s parameters. |

### amp

<span id="qiskit.pulse.library.Constant.amp" />

`property amp`

The constant value amplitude.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

### assign\_parameters

<span id="qiskit.pulse.library.Constant.assign_parameters" />

`assign_parameters(value_dict)`

Return a new ParametricPulse with parameters assigned.

**Parameters**

**value\_dict** (`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`, `int`]]) – A mapping from Parameters to either numeric values or another Parameter expression.

**Return type**

`ParametricPulse`

**Returns**

New pulse with updated parameters.

### draw

<span id="qiskit.pulse.library.Constant.draw" />

`draw(dt=1, style=None, filename=None, interp_method=None, scale=1, interactive=False)`

Plot the pulse.

**Parameters**

*   **dt** (`float`) – Time interval of samples.
*   **style** (*Optional\[*[*PulseStyle*](qiskit.visualization.pulse.qcstyle#pulsestyle "qiskit.visualization.pulse.qcstyle.PulseStyle")*]*) – A style sheet to configure plot appearance
*   **filename** (`Optional`\[`str`]) – Name required to save pulse image
*   **interp\_method** (`Optional`\[`Callable`]) – A function for interpolation
*   **scale** (`float`) – Relative visual scaling of waveform amplitudes
*   **interactive** (`bool`) – When set true show the circuit in a new window (this depends on the matplotlib backend being used supporting this)

**Returns**

A matplotlib figure object of the pulse envelope

**Return type**

matplotlib.figure

### get\_sample\_pulse

<span id="qiskit.pulse.library.Constant.get_sample_pulse" />

`get_sample_pulse()`

Deprecated.

**Return type**

`Waveform`

### get\_waveform

<span id="qiskit.pulse.library.Constant.get_waveform" />

`get_waveform()`

Return a Waveform with samples filled according to the formula that the pulse represents and the parameter values it contains.

**Return type**

`Waveform`

### id

<span id="qiskit.pulse.library.Constant.id" />

`property id`

Unique identifier for this pulse.

**Return type**

`int`

### parameters

<span id="qiskit.pulse.library.Constant.parameters" />

`property parameters`

Return a dictionary containing the pulse’s parameters.

**Return type**

`Dict`\[`str`, `Any`]

### validate\_parameters

<span id="qiskit.pulse.library.Constant.validate_parameters" />

`validate_parameters()`

Validate parameters.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the parameters passed are not valid.

**Return type**

`None`

