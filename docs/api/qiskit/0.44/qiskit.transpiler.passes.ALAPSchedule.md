---
title: ALAPSchedule
description: API reference for qiskit.transpiler.passes.ALAPSchedule
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.ALAPSchedule
---

# ALAPSchedule

<span id="qiskit.transpiler.passes.ALAPSchedule" />

`qiskit.transpiler.passes.ALAPSchedule(*args, **kwargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/transpiler/passes/scheduling/alap.py "view source code")

Bases: `BaseSchedulerTransform`

ALAP Scheduling pass, which schedules the **stop** time of instructions as late as possible.

See `BaseSchedulerTransform` for the detailed behavior of the control flow operation, i.e. `c_if`.

<Admonition title="Deprecated since version 0.21.0_pending" type="danger">
  The class `qiskit.transpiler.passes.scheduling.alap.ALAPSchedule` is pending deprecation as of qiskit-terra 0.21.0. It will be marked deprecated in a future release, and then removed no earlier than 3 months after the release date. Instead, use [`ALAPScheduleAnalysis`](qiskit.transpiler.passes.ALAPScheduleAnalysis "qiskit.transpiler.passes.ALAPScheduleAnalysis"), which is an analysis pass that requires a padding pass to later modify the circuit.
</Admonition>

## Attributes

<span id="qiskit.transpiler.passes.ALAPSchedule.CONDITIONAL_SUPPORTED" />

### CONDITIONAL\_SUPPORTED

`= (, )`

<span id="qiskit.transpiler.passes.ALAPSchedule.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.ALAPSchedule.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

## Methods

### name

<span id="qiskit.transpiler.passes.ALAPSchedule.name" />

`name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.ALAPSchedule.run" />

`run(dag)`

Run the ALAPSchedule pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to schedule.

**Returns**

A scheduled DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

*   [**TranspilerError**](transpiler#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if the circuit is not mapped on physical qubits.
*   [**TranspilerError**](transpiler#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if conditional bit is added to non-supported instruction.

