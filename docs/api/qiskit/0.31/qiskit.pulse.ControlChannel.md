---
title: ControlChannel
description: API reference for qiskit.pulse.ControlChannel
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.ControlChannel
---

# ControlChannel

<span id="qiskit.pulse.ControlChannel" />

`ControlChannel(index)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/pulse/channels.py "view source code")

Bases: `qiskit.pulse.channels.PulseChannel`

Control channels provide supplementary control over the qubit to the drive channel. These are often associated with multi-qubit gate operations. They may not map trivially to a particular qubit index.

Channel class.

**Parameters**

**index** (`int`) – Index of channel.

## Methods

### assign

<span id="qiskit.pulse.ControlChannel.assign" />

`ControlChannel.assign(parameter, value)`

Return a new channel with the input Parameter assigned to value.

**Parameters**

*   **parameter** (`Parameter`) – A parameter in this expression whose value will be updated.
*   **value** (`Union`\[`ParameterExpression`, `float`]) – The new value to bind to.

**Return type**

`Channel`

**Returns**

A new channel with updated parameters.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the parameter is not present in the channel.

### is\_parameterized

<span id="qiskit.pulse.ControlChannel.is_parameterized" />

`ControlChannel.is_parameterized()`

Return True iff the channel is parameterized.

**Return type**

`bool`

## Attributes

<span id="qiskit.pulse.ControlChannel.index" />

### index

Return the index of this channel. The index is a label for a control signal line typically mapped trivially to a qubit index. For instance, `DriveChannel(0)` labels the signal line driving the qubit labeled with index 0.

**Return type**

`Union`\[`int`, `ParameterExpression`]

<span id="qiskit.pulse.ControlChannel.name" />

### name

Return the shorthand alias for this channel, which is based on its type and index.

**Return type**

`str`

<span id="qiskit.pulse.ControlChannel.parameters" />

### parameters

Parameters which determine the channel index.

**Return type**

`Set`

<span id="qiskit.pulse.ControlChannel.prefix" />

### prefix

`= 'u'`

