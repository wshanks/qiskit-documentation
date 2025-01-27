---
title: Qubit
description: API reference for qiskit.circuit.Qubit
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.Qubit
---

# Qubit

<span id="qiskit.circuit.Qubit" />

`qiskit.circuit.Qubit(register=None, index=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/quantumregister.py "view source code")

Bases: [`Bit`](qiskit.circuit.Bit "qiskit.circuit.bit.Bit")

Implement a quantum bit.

Creates a qubit.

**Parameters**

*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – Optional. A quantum register containing the bit.
*   **index** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Optional. The index of the bit in its containing register.

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – if the provided register is not a valid [`QuantumRegister`](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")

