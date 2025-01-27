---
title: Clbit
description: API reference for qiskit.circuit.Clbit
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.Clbit
---

# Clbit

<span id="qiskit.circuit.Clbit" />

`qiskit.circuit.Clbit(register=None, index=None)`[GitHub](https://github.com/qiskit/qiskit/tree/main/qiskit/circuit/classicalregister.py "view source code")

Bases: [`Bit`](qiskit.circuit.Bit "qiskit.circuit.bit.Bit")

Implement a classical bit.

Creates a classical bit.

**Parameters**

*   **register** ([*ClassicalRegister*](qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister")) – Optional. A classical register containing the bit.
*   **index** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Optional. The index of the bit in its containing register.

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – if the provided register is not a valid [`ClassicalRegister`](qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister")

