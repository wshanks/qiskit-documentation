---
title: UVCC
description: API reference for qiskit.chemistry.components.variational_forms.UVCC
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.components.variational_forms.UVCC
---

# UVCC

<span id="qiskit.chemistry.components.variational_forms.UVCC" />

`UVCC(num_qubits, basis, degrees, reps=1, excitations=None, initial_state=None, qubit_mapping='direct', num_time_slices=1, shallow_circuit_concat=True)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/components/variational_forms/uvcc.py "view source code")

Bases: `qiskit.aqua.components.variational_forms.variational_form.VariationalForm`

This trial wavefunction is a Unitary Vibrational Coupled-Cluster Single and Double excitations variational form. For more information, see Ollitrault Pauline J., Chemical science 11 (2020): 6842-6855.

**Parameters**

*   **num\_qubits** (`int`) – number of qubits
*   **basis** (`List`\[`int`]) – Is a list defining the number of modals per mode. E.g. for a 3 modes system with 4 modals per mode basis = \[4,4,4]
*   **degrees** (`List`\[`int`]) – degree of excitation to be included (for single and double excitations degrees=\[0,1])
*   **reps** (`int`) – number of replica of basic module
*   **excitations** (`Optional`\[`List`\[`List`\[`List`\[`int`]]]]) – The excitations to be included in the circuit. If not provided the default is to compute all singles and doubles.
*   **initial\_state** (`Union`\[`QuantumCircuit`, `InitialState`, `None`]) – An initial state object.
*   **qubit\_mapping** (`str`) – the qubits mapping type. Only ‘direct’ is supported at the moment.
*   **num\_time\_slices** (`int`) – parameters for dynamics.
*   **shallow\_circuit\_concat** (`bool`) – indicate whether to use shallow (cheap) mode for circuit concatenation

## Methods

### compute\_excitation\_lists

<span id="qiskit.chemistry.components.variational_forms.UVCC.compute_excitation_lists" />

`static UVCC.compute_excitation_lists(basis, degrees)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/components/variational_forms/uvcc.py "view source code")

Compute the list with all possible excitation for given orders

**Parameters**

*   **basis** (`List`\[`int`]) – Is a list defining the number of modals per mode. E.g. for a 3 modes system with 4 modals per mode basis = \[4,4,4]
*   **degrees** (`List`\[`int`]) – degree of excitation to be included (for single and double excitations degrees=\[0,1])

**Return type**

`List`\[`List`\[`int`]]

**Returns**

List of excitation indexes in terms of modes and modals

**Raises**

**ValueError** – If excitation degree is greater than size of basis

### construct\_circuit

<span id="qiskit.chemistry.components.variational_forms.UVCC.construct_circuit" />

`UVCC.construct_circuit(parameters, q=None)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/components/variational_forms/uvcc.py "view source code")

Construct the variational form, given its parameters.

**Parameters**

*   **parameters** (`Union`\[`ndarray`, `List`\[`Parameter`], `ParameterVector`]) – circuit parameters
*   **q** (`Optional`\[`QuantumRegister`]) – Quantum Register for the circuit.

**Return type**

`QuantumCircuit`

**Returns**

Quantum Circuit a quantum circuit with given parameters

**Raises**

*   **ValueError** – the number of parameters is incorrect.
*   **ValueError** – if num\_qubits has not been set and is still None

### excitations\_in\_qubit\_format

<span id="qiskit.chemistry.components.variational_forms.UVCC.excitations_in_qubit_format" />

`UVCC.excitations_in_qubit_format()`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/components/variational_forms/uvcc.py "view source code")

#### Gives the list of excitation indexes in terms of qubit indexes rather

than in modes and modals

**Return type**

`List`\[`List`\[`int`]]

**Returns**

List of excitation indexes

### get\_entangler\_map

<span id="qiskit.chemistry.components.variational_forms.UVCC.get_entangler_map" />

`static UVCC.get_entangler_map(map_type, num_qubits, offset=0)`

returns entangler map

### validate\_entangler\_map

<span id="qiskit.chemistry.components.variational_forms.UVCC.validate_entangler_map" />

`static UVCC.validate_entangler_map(entangler_map, num_qubits)`

validate entangler map

## Attributes

<span id="qiskit.chemistry.components.variational_forms.UVCC.num_parameters" />

### num\_parameters

Number of parameters of the variational form.

**Returns**

An integer indicating the number of parameters.

**Return type**

int

<span id="qiskit.chemistry.components.variational_forms.UVCC.num_qubits" />

### num\_qubits

Number of qubits of the variational form.

**Returns**

An integer indicating the number of qubits.

**Return type**

int

<span id="qiskit.chemistry.components.variational_forms.UVCC.parameter_bounds" />

### parameter\_bounds

Parameter bounds.

**Returns**

A list of pairs indicating the bounds, as (lower, upper). None indicates an unbounded parameter in the corresponding direction. If None is returned, problem is fully unbounded.

**Return type**

list

<span id="qiskit.chemistry.components.variational_forms.UVCC.preferred_init_points" />

### preferred\_init\_points

Return preferred init points.

If an initial state is provided then the variational form may provide back this set of parameters which when used on the variational form should result in the overall state being that defined by the initial state

<span id="qiskit.chemistry.components.variational_forms.UVCC.setting" />

### setting

<span id="qiskit.chemistry.components.variational_forms.UVCC.support_parameterized_circuit" />

### support\_parameterized\_circuit

Whether or not the sub-class support parameterized circuit.

**Returns**

indicate the sub-class support parameterized circuit

**Return type**

boolean

