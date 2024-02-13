---
title: DAGOutNode
description: API reference for qiskit.dagcircuit.DAGOutNode
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.dagcircuit.DAGOutNode
---

# DAGOutNode

<span id="qiskit.dagcircuit.DAGOutNode" />

`qiskit.dagcircuit.DAGOutNode(wire)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/dagcircuit/dagnode.py "view source code")

Bases: [`DAGNode`](qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.dagnode.DAGNode")

Object to represent an outgoing wire node in the DAGCircuit.

Create an outgoing node

## Attributes

<span id="qiskit.dagcircuit.DAGOutNode.wire" />

### wire

<span id="qiskit.dagcircuit.DAGOutNode.sort_key" />

### sort\_key

## Methods

### semantic\_eq

<span id="qiskit.dagcircuit.DAGOutNode.semantic_eq" />

`static semantic_eq(node1, node2, bit_indices1, bit_indices2)`

Check if DAG nodes are considered equivalent, e.g., as a node\_match for [`rustworkx.is_isomorphic_node_match()`](https://www.rustworkx.org/apiref/rustworkx.is_isomorphic_node_match.html#rustworkx.is_isomorphic_node_match "(in rustworkx v0.14.0)").

**Parameters**

*   **node1** ([*DAGOpNode*](qiskit.dagcircuit.DAGOpNode "qiskit.dagcircuit.DAGOpNode")*,* [*DAGInNode*](qiskit.dagcircuit.DAGInNode "qiskit.dagcircuit.DAGInNode")*,* [*DAGOutNode*](#qiskit.dagcircuit.DAGOutNode "qiskit.dagcircuit.DAGOutNode")) – A node to compare.
*   **node2** ([*DAGOpNode*](qiskit.dagcircuit.DAGOpNode "qiskit.dagcircuit.DAGOpNode")*,* [*DAGInNode*](qiskit.dagcircuit.DAGInNode "qiskit.dagcircuit.DAGInNode")*,* [*DAGOutNode*](#qiskit.dagcircuit.DAGOutNode "qiskit.dagcircuit.DAGOutNode")) – The other node to compare.
*   **bit\_indices1** ([*dict*](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")) – Dictionary mapping Bit instances to their index within the circuit containing node1
*   **bit\_indices2** ([*dict*](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")) – Dictionary mapping Bit instances to their index within the circuit containing node2

**Returns**

If node1 == node2

**Return type**

[Bool](circuit_classical#qiskit.circuit.classical.types.Bool "qiskit.circuit.classical.types.Bool")
