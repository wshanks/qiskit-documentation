---
title: GaussianSquare
description: API reference for qiskit.pulse.library.GaussianSquare
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.library.GaussianSquare
---

# GaussianSquare

<span id="qiskit.pulse.library.GaussianSquare" />

`GaussianSquare(duration, amp, sigma, width=None, risefall_sigma_ratio=None, name=None, limit_amplitude=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/pulse/library/parametric_pulses.py "view source code")

Bases: `qiskit.pulse.library.parametric_pulses.ParametricPulse`

A square pulse with a Gaussian shaped risefall on both sides lifted such that its first sample is zero.

Either the `risefall_sigma_ratio` or `width` parameter has to be specified.

If `risefall_sigma_ratio` is not None and `width` is None:

$$
\begin{split}\text{risefall} &= \text{risefall_sigma_ratio} \times \text{sigma}\\
\text{width} &= \text{duration} - 2 \times \text{risefall}\end{split}
$$

If `width` is not None and `risefall_sigma_ratio` is None:

$$
\text{risefall} = \frac{\text{duration} - \text{width}}{2}
$$

In both cases, the lifted gaussian square pulse $f'(x)$ is defined as:

$$
\begin{split}f'(x) &= \begin{cases}            \exp\biggl(-\frac12 \frac{(x - \text{risefall})^2}{\text{sigma}^2}\biggr)                & x < \text{risefall}\\
    1                & \text{risefall} \le x < \text{risefall} + \text{width}\\
    \exp\biggl(-\frac12                    \frac{{\bigl(x - (\text{risefall} + \text{width})\bigr)}^2}                          {\text{sigma}^2}                    \biggr)                & \text{risefall} + \text{width} \le x        \end{cases}\\
f(x) &= \text{amp} \times \frac{f'(x) - f'(-1)}{1-f'(-1)},            \quad 0 \le x < \text{duration}\end{split}
$$

where $f'(x)$ is the gaussian square waveform without lifting or amplitude scaling.

This pulse would be more accurately named as `LiftedGaussianSquare`, however, for historical and practical DSP reasons it has the name `GaussianSquare`.

Initialize the gaussian square pulse.

**Parameters**

*   **duration** (`Union`\[`int`, `ParameterExpression`]) – Pulse length in terms of the the sampling period dt.
*   **amp** (`Union`\[`complex`, `ParameterExpression`]) – The amplitude of the Gaussian and of the square pulse.
*   **sigma** (`Union`\[`float`, `ParameterExpression`]) – A measure of how wide or narrow the Gaussian risefall is; see the class docstring for more details.
*   **width** (`Union`\[`float`, `ParameterExpression`, `None`]) – The duration of the embedded square pulse.
*   **risefall\_sigma\_ratio** (`Union`\[`float`, `ParameterExpression`, `None`]) – The ratio of each risefall duration to sigma.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.
*   **limit\_amplitude** (`Optional`\[`bool`]) – If `True`, then limit the amplitude of the waveform to 1. The default is `True` and the amplitude is constrained to 1.

## Methods

### draw

<span id="qiskit.pulse.library.GaussianSquare.draw" />

`GaussianSquare.draw(style=None, backend=None, time_range=None, time_unit='dt', show_waveform_info=True, plotter='mpl2d', axis=None)`

Plot the interpolated envelope of pulse.

**Parameters**

*   **style** (`Optional`\[`Dict`\[`str`, `Any`]]) – Stylesheet options. This can be dictionary or preset stylesheet classes. See `IQXStandard`, `IQXSimple`, and `IQXDebugging` for details of preset stylesheets.

*   **backend** (*Optional\[*[*BaseBackend*](qiskit.providers.BaseBackend "qiskit.providers.BaseBackend")*]*) – Backend object to play the input pulse program. If provided, the plotter may use to make the visualization hardware aware.

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

<span id="qiskit.pulse.library.GaussianSquare.get_waveform" />

`GaussianSquare.get_waveform()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/pulse/library/parametric_pulses.py "view source code")

Return a Waveform with samples filled according to the formula that the pulse represents and the parameter values it contains.

**Return type**

`Waveform`

### is\_parameterized

<span id="qiskit.pulse.library.GaussianSquare.is_parameterized" />

`GaussianSquare.is_parameterized()`

Return True iff the instruction is parameterized.

**Return type**

`bool`

### validate\_parameters

<span id="qiskit.pulse.library.GaussianSquare.validate_parameters" />

`GaussianSquare.validate_parameters()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/pulse/library/parametric_pulses.py "view source code")

Validate parameters.

**Raises**

[**PulseError**](pulse#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the parameters passed are not valid.

**Return type**

`None`

## Attributes

<span id="qiskit.pulse.library.GaussianSquare.amp" />

### amp

The Gaussian amplitude.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

<span id="qiskit.pulse.library.GaussianSquare.id" />

### id

Unique identifier for this pulse.

**Return type**

`int`

<span id="qiskit.pulse.library.GaussianSquare.limit_amplitude" />

### limit\_amplitude

`= True`

<span id="qiskit.pulse.library.GaussianSquare.parameters" />

### parameters

**Return type**

`Dict`\[`str`, `Any`]

<span id="qiskit.pulse.library.GaussianSquare.risefall_sigma_ratio" />

### risefall\_sigma\_ratio

The duration of each risefall in terms of sigma.

**Return type**

`Union`\[`float`, `ParameterExpression`]

<span id="qiskit.pulse.library.GaussianSquare.sigma" />

### sigma

The Gaussian standard deviation of the pulse width.

**Return type**

`Union`\[`float`, `ParameterExpression`]

<span id="qiskit.pulse.library.GaussianSquare.width" />

### width

The width of the square portion of the pulse.

**Return type**

`Union`\[`float`, `ParameterExpression`]

