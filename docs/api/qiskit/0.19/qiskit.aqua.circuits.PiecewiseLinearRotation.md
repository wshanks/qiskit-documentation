---
title: PiecewiseLinearRotation
description: API reference for qiskit.aqua.circuits.PiecewiseLinearRotation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.circuits.PiecewiseLinearRotation
---

# PiecewiseLinearRotation

<span id="qiskit.aqua.circuits.PiecewiseLinearRotation" />

`PiecewiseLinearRotation(breakpoints, slopes, offsets, num_state_qubits, basis='Y', i_state=None, i_target=None)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/circuits/piecewise_linear_rotation.py "view source code")

*DEPRECATED.* Piecewise-linearly-controlled rotation.

<Admonition title="Deprecated since version 0.7.0" type="danger">
  Use Terra’s qiskit.circuit.library.PiecewiseLinearPauliRotations instead.
</Admonition>

For a piecewise linear (not necessarily continuous) function f(x). The function f(x) is defined through breakpoints, slopes and offsets as follows. Suppose the breakpoints \{ x\_0, …, x\_J } are a subset of \[0, 2^n-1], where n is the number of state qubits. Further on, denote the corresponding slopes and offsets by a\_j, b\_j respectively. Then f(x) is defined as:

> x \< x\_0 –> f(x) = 0 x\_j \<= x \< x\_\{j+1} –> f(x) = a\_j \* (x - x\_j) + b\_j

where we implicitly assume x\_\{J+1} = 2^n.

**Parameters**

*   **breakpoints** (*Union(list, numpy.ndarray)*) – breakpoints to define piecewise-linear function
*   **slopes** (*Union(list, numpy.ndarray)*) – slopes for different segments of piecewise-linear function
*   **offsets** (*Union(list, numpy.ndarray)*) – offsets for different segments of piecewise-linear function
*   **num\_state\_qubits** (*int*) – number of qubits representing the state
*   **basis** (*Optional(str)*) – type of Pauli rotation (‘X’, ‘Y’, ‘Z’)
*   **i\_state** (*Optional(Union(list, numpy.ndarray))*) – indices of qubits representing the state, set to range(num\_state\_qubits) if None
*   **i\_target** (*Optional(int)*) – index of target qubit, set to num\_state\_qubits if None

## Attributes

### num\_target\_qubits

Returns the number of target qubits

## Methods

### build

<span id="qiskit.aqua.circuits.PiecewiseLinearRotation.build" />

`PiecewiseLinearRotation.build(qc, q, q_ancillas=None, params=None)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/circuits/piecewise_linear_rotation.py "view source code")

Build the circuit.

### build\_controlled

<span id="qiskit.aqua.circuits.PiecewiseLinearRotation.build_controlled" />

`PiecewiseLinearRotation.build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse

<span id="qiskit.aqua.circuits.PiecewiseLinearRotation.build_controlled_inverse" />

`PiecewiseLinearRotation.build_controlled_inverse(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds controlled inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse\_power

<span id="qiskit.aqua.circuits.PiecewiseLinearRotation.build_controlled_inverse_power" />

`PiecewiseLinearRotation.build_controlled_inverse_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled, inverse, power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_controlled\_power

<span id="qiskit.aqua.circuits.PiecewiseLinearRotation.build_controlled_power" />

`PiecewiseLinearRotation.build_controlled_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_inverse

<span id="qiskit.aqua.circuits.PiecewiseLinearRotation.build_inverse" />

`PiecewiseLinearRotation.build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

### build\_inverse\_power

<span id="qiskit.aqua.circuits.PiecewiseLinearRotation.build_inverse_power" />

`PiecewiseLinearRotation.build_inverse_power(qc, q, power, q_ancillas=None)`

Adds inverse power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_power

<span id="qiskit.aqua.circuits.PiecewiseLinearRotation.build_power" />

`PiecewiseLinearRotation.build_power(qc, q, power, q_ancillas=None)`

Adds power of corresponding circuit. May be overridden if a more efficient implementation is possible

### evaluate

<span id="qiskit.aqua.circuits.PiecewiseLinearRotation.evaluate" />

`PiecewiseLinearRotation.evaluate(x)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/circuits/piecewise_linear_rotation.py "view source code")

Classically evaluate the piecewise linear rotation

**Parameters**

**x** (*float*) – value to be evaluated at

**Returns**

value of piecewise linear function at x

**Return type**

float

### get\_num\_qubits

<span id="qiskit.aqua.circuits.PiecewiseLinearRotation.get_num_qubits" />

`PiecewiseLinearRotation.get_num_qubits()`

returns number of qubits

### get\_num\_qubits\_controlled

<span id="qiskit.aqua.circuits.PiecewiseLinearRotation.get_num_qubits_controlled" />

`PiecewiseLinearRotation.get_num_qubits_controlled()`

returns number of qubits controlled

### required\_ancillas

<span id="qiskit.aqua.circuits.PiecewiseLinearRotation.required_ancillas" />

`PiecewiseLinearRotation.required_ancillas()`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/circuits/piecewise_linear_rotation.py "view source code")

Return the number of required ancillas.

### required\_ancillas\_controlled

<span id="qiskit.aqua.circuits.PiecewiseLinearRotation.required_ancillas_controlled" />

`PiecewiseLinearRotation.required_ancillas_controlled()`

returns required ancillas controlled

