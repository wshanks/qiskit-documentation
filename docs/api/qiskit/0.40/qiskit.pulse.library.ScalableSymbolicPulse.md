---
title: ScalableSymbolicPulse
description: API reference for qiskit.pulse.library.ScalableSymbolicPulse
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.library.ScalableSymbolicPulse
---

# ScalableSymbolicPulse

<span id="qiskit.pulse.library.ScalableSymbolicPulse" />

`ScalableSymbolicPulse(pulse_type, duration, amp, angle, parameters=None, name=None, limit_amplitude=None, envelope=None, constraints=None, valid_amp_conditions=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/pulse/library/symbolic_pulses.py "view source code")

Bases: [`qiskit.pulse.library.symbolic_pulses.SymbolicPulse`](qiskit.pulse.library.SymbolicPulse "qiskit.pulse.library.symbolic_pulses.SymbolicPulse")

Subclass of [`SymbolicPulse`](qiskit.pulse.library.SymbolicPulse "qiskit.pulse.library.SymbolicPulse") for pulses with scalable envelope.

Instance of [`ScalableSymbolicPulse`](#qiskit.pulse.library.ScalableSymbolicPulse "qiskit.pulse.library.ScalableSymbolicPulse") behaves the same as an instance of [`SymbolicPulse`](qiskit.pulse.library.SymbolicPulse "qiskit.pulse.library.SymbolicPulse"), but its envelope is assumed to have a scalable form $\text{amp}\times\exp\left(i\times\text{angle}\right)\times\text{F} \left(t,\text{parameters}\right)$, where $\text{F}$ is some function describing the rest of the envelope, and both amp and angle are real (float). Note that both amp and angle are stored in the [`parameters`](#qiskit.pulse.library.ScalableSymbolicPulse.parameters "qiskit.pulse.library.ScalableSymbolicPulse.parameters") dictionary of the [`ScalableSymbolicPulse`](#qiskit.pulse.library.ScalableSymbolicPulse "qiskit.pulse.library.ScalableSymbolicPulse") instance.

When two [`ScalableSymbolicPulse`](#qiskit.pulse.library.ScalableSymbolicPulse "qiskit.pulse.library.ScalableSymbolicPulse") objects are equated, instead of comparing amp and angle individually, only the complex amplitude :math:’text\{amp}timesexpleft(itimestext\{angle}right)’ is compared.

Create a scalable symbolic pulse.

**Parameters**

*   **pulse\_type** (`str`) – Display name of this pulse shape.
*   **duration** (`Union`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `int`]) – Duration of pulse.
*   **amp** (`Union`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `float`, `complex`]) – The magnitude of the complex amplitude of the pulse.
*   **angle** (`Union`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `float`]) – The phase of the complex amplitude of the pulse.
*   **parameters** (`Optional`\[`Dict`\[`str`, `Union`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `complex`]]]) – Dictionary of pulse parameters that defines the pulse envelope.
*   **name** (`Optional`\[`str`]) – Display name for this particular pulse envelope.
*   **limit\_amplitude** (`Optional`\[`bool`]) – If `True`, then limit the absolute value of the amplitude of the waveform to 1. The default is `True` and the amplitude is constrained to 1.
*   **envelope** (`Optional`\[`Expr`]) – Pulse envelope expression.
*   **constraints** (`Optional`\[`Expr`]) – Pulse parameter constraint expression.
*   **valid\_amp\_conditions** (`Optional`\[`Expr`]) – Extra conditions to skip a full-waveform check for the amplitude limit. If this condition is not met, then the validation routine will investigate the full-waveform and raise an error when the amplitude norm of any data point exceeds 1.0. If not provided, the validation always creates a full-waveform.

**Raises**

[**PulseError**](pulse#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If both amp is complex and angle is not None or 0.

## Methods

### draw

<span id="qiskit.pulse.library.ScalableSymbolicPulse.draw" />

`ScalableSymbolicPulse.draw(style=None, backend=None, time_range=None, time_unit='dt', show_waveform_info=True, plotter='mpl2d', axis=None)`

Plot the interpolated envelope of pulse.

**Parameters**

*   **style** (`Optional`\[`Dict`\[`str`, `Any`]]) – Stylesheet options. This can be dictionary or preset stylesheet classes. See `IQXStandard`, `IQXSimple`, and `IQXDebugging` for details of preset stylesheets.

*   **backend** (*Optional\[BaseBackend]*) – Backend object to play the input pulse program. If provided, the plotter may use to make the visualization hardware aware.

*   **time\_range** (`Optional`\[`Tuple`\[`int`, `int`]]) – Set horizontal axis limit. Tuple `(tmin, tmax)`.

*   **time\_unit** (`str`) – The unit of specified time range either `dt` or `ns`. The unit of `ns` is available only when `backend` object is provided.

*   **show\_waveform\_info** (`bool`) – Show waveform annotations, i.e. name, of waveforms. Set `True` to show additional information about waveforms.

*   **plotter** (`str`) –

    Name of plotter API to generate an output image. One of following APIs should be specified:

    ```python
    mpl2d: Matplotlib API for 2D image generation.
        Matplotlib API to generate 2D image. Charts are placed along y axis with
        vertical offset. This API takes matplotlib.axes.Axes as `axis` input.
    ```

    axis and style kwargs may depend on the plotter.

*   **axis** (`Optional`\[`Any`]) – Arbitrary object passed to the plotter. If this object is provided, the plotters use a given `axis` instead of internally initializing a figure object. This object format depends on the plotter. See plotter argument for details.

**Returns**

Visualization output data. The returned data type depends on the `plotter`. If matplotlib family is specified, this will be a `matplotlib.pyplot.Figure` data.

### get\_waveform

<span id="qiskit.pulse.library.ScalableSymbolicPulse.get_waveform" />

`ScalableSymbolicPulse.get_waveform()`

Return a Waveform with samples filled according to the formula that the pulse represents and the parameter values it contains.

Since the returned array is a discretized time series of the continuous function, this method uses a midpoint sampler. For `duration`, return:

$$
\{f(t+0.5) \in \mathbb{C} | t \in \mathbb{Z} \wedge  0<=t<\texttt{duration}\}
$$

**Return type**

[`Waveform`](qiskit.pulse.library.Waveform "qiskit.pulse.library.waveform.Waveform")

**Returns**

A waveform representation of this pulse.

**Raises**

*   [**PulseError**](pulse#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – When parameters are not assigned.
*   [**PulseError**](pulse#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – When expression for pulse envelope is not assigned.

### is\_parameterized

<span id="qiskit.pulse.library.ScalableSymbolicPulse.is_parameterized" />

`ScalableSymbolicPulse.is_parameterized()`

Return True iff the instruction is parameterized.

**Return type**

`bool`

### validate\_parameters

<span id="qiskit.pulse.library.ScalableSymbolicPulse.validate_parameters" />

`ScalableSymbolicPulse.validate_parameters()`

Validate parameters.

**Raises**

[**PulseError**](pulse#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the parameters passed are not valid.

**Return type**

`None`

## Attributes

<span id="qiskit.pulse.library.ScalableSymbolicPulse.constraints" />

### constraints

Return symbolic expression for the pulse parameter constraints.

**Return type**

`Expr`

<span id="qiskit.pulse.library.ScalableSymbolicPulse.duration" />

### duration

<span id="qiskit.pulse.library.ScalableSymbolicPulse.envelope" />

### envelope

Return symbolic expression for the pulse envelope.

**Return type**

`Expr`

<span id="qiskit.pulse.library.ScalableSymbolicPulse.id" />

### id

Unique identifier for this pulse.

**Return type**

`int`

<span id="qiskit.pulse.library.ScalableSymbolicPulse.limit_amplitude" />

### limit\_amplitude

`= True`

<span id="qiskit.pulse.library.ScalableSymbolicPulse.name" />

### name

<span id="qiskit.pulse.library.ScalableSymbolicPulse.parameters" />

### parameters

**Return type**

`Dict`\[`str`, `Any`]

<span id="qiskit.pulse.library.ScalableSymbolicPulse.pulse_type" />

### pulse\_type

Return display name of the pulse shape.

**Return type**

`str`

<span id="qiskit.pulse.library.ScalableSymbolicPulse.valid_amp_conditions" />

### valid\_amp\_conditions

Return symbolic expression for the pulse amplitude constraints.

**Return type**

`Expr`

