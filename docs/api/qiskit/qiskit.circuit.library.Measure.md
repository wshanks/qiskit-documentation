---
title: Measure
description: API reference for qiskit.circuit.library.Measure
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.Measure
---

# Measure

<span id="qiskit.circuit.library.Measure" />

`qiskit.circuit.library.Measure(*args, _force_mutable=False, **kwargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/measure.py "view source code")

Bases: [`SingletonInstruction`](circuit_singleton#qiskit.circuit.singleton.SingletonInstruction "qiskit.circuit.singleton.SingletonInstruction")

Quantum measurement in the computational basis.

Create new measurement instruction.

## Attributes

<span id="qiskit.circuit.library.Measure.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.Measure.base_class "qiskit.circuit.library.Measure.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

This is often exactly equivalent to `type(obj)`, except in the case of singleton instances of standard-library instructions. These singleton instances are special subclasses of their base class, and this property will return that base. For example:

```python
>>> isinstance(XGate(), XGate)
True
>>> type(XGate()) is XGate
False
>>> XGate().base_class is XGate
True
```

In general, you should not rely on the precise class of an instruction; within a given circuit, it is expected that `Instruction.name` should be a more suitable discriminator in most situations.

<span id="qiskit.circuit.library.Measure.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.Measure.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.Measure.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.Measure.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.Measure.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.Measure.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.Measure.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.Measure.name" />

### name

Return the name.

<span id="qiskit.circuit.library.Measure.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.Measure.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.Measure.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.Measure.unit" />

### unit

Get the time unit of duration.

## Methods

### add\_decomposition

<span id="qiskit.circuit.library.Measure.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.library.Measure.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.circuit.library.Measure.broadcast_arguments" />

`broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.circuit.library.Measure.c_if" />

`c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

### copy

<span id="qiskit.circuit.library.Measure.copy" />

`copy(name=None)`

Copy of the instruction.

**Parameters**

**name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – name to be given to the copied circuit, if `None` then the name stays the same.

**Returns**

a copy of the current instruction, with the name updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit.circuit.library.Measure.inverse" />

`inverse(annotated=False)`

Invert this instruction.

If annotated is False, the inverse instruction is implemented as a fresh instruction with the recursively inverted definition.

If annotated is True, the inverse instruction is implemented as [`AnnotatedOperation`](qiskit.circuit.AnnotatedOperation "qiskit.circuit.AnnotatedOperation"), and corresponds to the given instruction annotated with the “inverse modifier”.

Special instructions inheriting from Instruction can implement their own inverse (e.g. T and Tdg, Barrier, etc.) In particular, they can choose how to handle the argument `annotated` which may include ignoring it and always returning a concrete gate class if the inverse is defined as a standard gate.

**Parameters**

**annotated** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – if set to True the output inverse gate will be returned as [`AnnotatedOperation`](qiskit.circuit.AnnotatedOperation "qiskit.circuit.AnnotatedOperation").

**Returns**

The inverse operation.

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – if the instruction is not composite and an inverse has not been implemented for it.

### is\_parameterized

<span id="qiskit.circuit.library.Measure.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### repeat

<span id="qiskit.circuit.library.Measure.repeat" />

`repeat(n)`

Creates an instruction with gate repeated n amount of times.

**Parameters**

**n** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Number of times to repeat the instruction

**Returns**

Containing the definition.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – If n \< 1.

### reverse\_ops

<span id="qiskit.circuit.library.Measure.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.circuit.library.Measure.soft_compare" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### to\_mutable

<span id="qiskit.circuit.library.Measure.to_mutable" />

`to_mutable()`

Return a mutable copy of this gate.

This method will return a new mutable copy of this gate instance. If a singleton instance is being used this will be a new unique instance that can be mutated. If the instance is already mutable it will be a deepcopy of that instance.

### validate\_parameter

<span id="qiskit.circuit.library.Measure.validate_parameter" />

`validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

