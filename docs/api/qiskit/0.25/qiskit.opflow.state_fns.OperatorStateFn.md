# qiskit.opflow\.state\_fns.OperatorStateFn

<span id="undefined" />

`OperatorStateFn(primitive, coeff=1.0, is_measurement=False)`

A class for state functions and measurements which are defined by a density Operator, stored using an `OperatorBase`.

**Parameters**

*   **primitive** (`OperatorBase`) – The `OperatorBase` which defines the behavior of the underlying State function.
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient by which to multiply the state function
*   **is\_measurement** (`bool`) – Whether the StateFn is a measurement operator

<span id="undefined" />

`__init__(primitive, coeff=1.0, is_measurement=False)`

**Parameters**

*   **primitive** (`OperatorBase`) – The `OperatorBase` which defines the behavior of the underlying State function.
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient by which to multiply the state function
*   **is\_measurement** (`bool`) – Whether the StateFn is a measurement operator

## Methods

|                                                                                                                                                            |                                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.opflow.state_fns.OperatorStateFn.__init__ "qiskit.opflow.state_fns.OperatorStateFn.__init__")(primitive\[, coeff, is\_measurement])   | **type primitive**`OperatorBase`                                                                                                                                                                    |
| [`add`](#qiskit.opflow.state_fns.OperatorStateFn.add "qiskit.opflow.state_fns.OperatorStateFn.add")(other)                                                 | Return Operator addition of self and other, overloaded by `+`.                                                                                                                                      |
| [`adjoint`](#qiskit.opflow.state_fns.OperatorStateFn.adjoint "qiskit.opflow.state_fns.OperatorStateFn.adjoint")()                                          | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                                                     |
| [`assign_parameters`](#qiskit.opflow.state_fns.OperatorStateFn.assign_parameters "qiskit.opflow.state_fns.OperatorStateFn.assign_parameters")(param\_dict) | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                                        |
| [`bind_parameters`](#qiskit.opflow.state_fns.OperatorStateFn.bind_parameters "qiskit.opflow.state_fns.OperatorStateFn.bind_parameters")(param\_dict)       | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                                                   |
| [`compose`](#qiskit.opflow.state_fns.OperatorStateFn.compose "qiskit.opflow.state_fns.OperatorStateFn.compose")(other\[, permutation, front])              | Composition (Linear algebra-style: A\@B(x) = A(B(x))) is not well defined for states in the binary function model, but is well defined for measurements.                                            |
| [`copy`](#qiskit.opflow.state_fns.OperatorStateFn.copy "qiskit.opflow.state_fns.OperatorStateFn.copy")()                                                   | Return a deep copy of the Operator.                                                                                                                                                                 |
| [`equals`](#qiskit.opflow.state_fns.OperatorStateFn.equals "qiskit.opflow.state_fns.OperatorStateFn.equals")(other)                                        | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                                            |
| [`eval`](#qiskit.opflow.state_fns.OperatorStateFn.eval "qiskit.opflow.state_fns.OperatorStateFn.eval")(\[front])                                           | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                                         |
| [`mul`](#qiskit.opflow.state_fns.OperatorStateFn.mul "qiskit.opflow.state_fns.OperatorStateFn.mul")(scalar)                                                | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`).                       |
| [`neg`](#qiskit.opflow.state_fns.OperatorStateFn.neg "qiskit.opflow.state_fns.OperatorStateFn.neg")()                                                      | Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                                            |
| [`permute`](#qiskit.opflow.state_fns.OperatorStateFn.permute "qiskit.opflow.state_fns.OperatorStateFn.permute")(permutation)                               | Permute the qubits of the state function.                                                                                                                                                           |
| [`power`](#qiskit.opflow.state_fns.OperatorStateFn.power "qiskit.opflow.state_fns.OperatorStateFn.power")(exponent)                                        | Compose with Self Multiple Times, undefined for StateFns.                                                                                                                                           |
| [`primitive_strings`](#qiskit.opflow.state_fns.OperatorStateFn.primitive_strings "qiskit.opflow.state_fns.OperatorStateFn.primitive_strings")()            | Return a set of strings describing the primitives contained in the Operator.                                                                                                                        |
| [`reduce`](#qiskit.opflow.state_fns.OperatorStateFn.reduce "qiskit.opflow.state_fns.OperatorStateFn.reduce")()                                             | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                                                  |
| [`sample`](#qiskit.opflow.state_fns.OperatorStateFn.sample "qiskit.opflow.state_fns.OperatorStateFn.sample")(\[shots, massive, reverse\_endianness])       | Sample the state function as a normalized probability distribution.                                                                                                                                 |
| [`tensor`](#qiskit.opflow.state_fns.OperatorStateFn.tensor "qiskit.opflow.state_fns.OperatorStateFn.tensor")(other)                                        | Return tensor product between self and other, overloaded by `^`.                                                                                                                                    |
| [`tensorpower`](#qiskit.opflow.state_fns.OperatorStateFn.tensorpower "qiskit.opflow.state_fns.OperatorStateFn.tensorpower")(other)                         | Return tensor product with self multiple times, overloaded by `^`.                                                                                                                                  |
| [`to_circuit_op`](#qiskit.opflow.state_fns.OperatorStateFn.to_circuit_op "qiskit.opflow.state_fns.OperatorStateFn.to_circuit_op")()                        | Return `StateFnCircuit` corresponding to this StateFn.                                                                                                                                              |
| [`to_density_matrix`](#qiskit.opflow.state_fns.OperatorStateFn.to_density_matrix "qiskit.opflow.state_fns.OperatorStateFn.to_density_matrix")(\[massive])  | Return numpy matrix of density operator, warn if more than 16 qubits to force the user to set massive=True if they want such a large matrix.                                                        |
| [`to_matrix`](#qiskit.opflow.state_fns.OperatorStateFn.to_matrix "qiskit.opflow.state_fns.OperatorStateFn.to_matrix")(\[massive])                          | Note: this does not return a density matrix, it returns a classical matrix containing the quantum or classical vector representing the evaluation of the state function on each binary basis state. |
| [`to_matrix_op`](#qiskit.opflow.state_fns.OperatorStateFn.to_matrix_op "qiskit.opflow.state_fns.OperatorStateFn.to_matrix_op")(\[massive])                 | Return a MatrixOp for this operator.                                                                                                                                                                |
| [`to_spmatrix`](#qiskit.opflow.state_fns.OperatorStateFn.to_spmatrix "qiskit.opflow.state_fns.OperatorStateFn.to_spmatrix")()                              | Return SciPy sparse matrix representation of the Operator.                                                                                                                                          |
| [`traverse`](#qiskit.opflow.state_fns.OperatorStateFn.traverse "qiskit.opflow.state_fns.OperatorStateFn.traverse")(convert\_fn\[, coeff])                  | Apply the convert\_fn to the internal primitive if the primitive is an Operator (as in the case of `OperatorStateFn`).                                                                              |

## Attributes

|                                                                                                                                      |                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| `INDENTATION`                                                                                                                        |                                                                            |
| [`coeff`](#qiskit.opflow.state_fns.OperatorStateFn.coeff "qiskit.opflow.state_fns.OperatorStateFn.coeff")                            | A coefficient by which the state function is multiplied.                   |
| [`instance_id`](#qiskit.opflow.state_fns.OperatorStateFn.instance_id "qiskit.opflow.state_fns.OperatorStateFn.instance_id")          | Return the unique instance id.                                             |
| [`is_measurement`](#qiskit.opflow.state_fns.OperatorStateFn.is_measurement "qiskit.opflow.state_fns.OperatorStateFn.is_measurement") | Whether the StateFn object is a measurement Operator.                      |
| [`num_qubits`](#qiskit.opflow.state_fns.OperatorStateFn.num_qubits "qiskit.opflow.state_fns.OperatorStateFn.num_qubits")             | The number of qubits over which the Operator is defined.                   |
| [`parameters`](#qiskit.opflow.state_fns.OperatorStateFn.parameters "qiskit.opflow.state_fns.OperatorStateFn.parameters")             | Return a set of Parameter objects contained in the Operator.               |
| [`primitive`](#qiskit.opflow.state_fns.OperatorStateFn.primitive "qiskit.opflow.state_fns.OperatorStateFn.primitive")                | The primitive which defines the behavior of the underlying State function. |

<span id="undefined" />

`add(other)`

Return Operator addition of self and other, overloaded by `+`.

**Parameters**

**other** (`OperatorBase`) – An `OperatorBase` with the same number of qubits as self, and in the same ‘Operator’, ‘State function’, or ‘Measurement’ category as self (i.e. the same type of underlying function).

**Return type**

`Union`\[`OperatorStateFn`, `SummedOp`]

**Returns**

An `OperatorBase` equivalent to the sum of self and other.

<span id="undefined" />

`adjoint()`

Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`. For StateFns, this also turns the StateFn into a measurement.

**Return type**

`OperatorStateFn`

**Returns**

An `OperatorBase` equivalent to the adjoint of self.

<span id="undefined" />

`assign_parameters(param_dict)`

Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another. This method differs from Terra’s `assign_parameters` in that it also supports lists of values to assign for a give `Parameter`, in which case self will be copied for each parameterization in the binding list(s), and all the copies will be returned in an `OpList`. If lists of parameterizations are used, every `Parameter` in the param\_dict must have the same length list of parameterizations.

**Parameters**

**param\_dict** (`dict`) – The dictionary of `Parameters` to replace, and values or lists of values by which to replace them.

**Return type**

`OperatorBase`

**Returns**

The `OperatorBase` with the `Parameters` in self replaced by the values or `Parameters` in param\_dict. If param\_dict contains parameterization lists, this `OperatorBase` is an `OpList`.

<span id="undefined" />

`bind_parameters(param_dict)`

Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).

**Return type**

`OperatorBase`

<span id="undefined" />

`property coeff`

A coefficient by which the state function is multiplied.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

<span id="undefined" />

`compose(other, permutation=None, front=False)`

Composition (Linear algebra-style: A\@B(x) = A(B(x))) is not well defined for states in the binary function model, but is well defined for measurements.

**Parameters**

*   **other** (`OperatorBase`) – The Operator to compose with self.
*   **permutation** (`Optional`\[`List`\[`int`]]) – `List[int]` which defines permutation on other operator.
*   **front** (`bool`) – If front==True, return `other.compose(self)`.

**Return type**

`OperatorBase`

**Returns**

An Operator equivalent to the function composition of self and other.

**Raises**

**ValueError** – If self is not a measurement, it cannot be composed from the right.

<span id="undefined" />

`copy()`

Return a deep copy of the Operator.

**Return type**

`OperatorBase`

<span id="undefined" />

`equals(other)`

Evaluate Equality between Operators, overloaded by `==`. Only returns True if self and other are of the same representation (e.g. a DictStateFn and CircuitStateFn will never be equal, even if their vector representations are equal), their underlying primitives are equal (this means for ListOps, OperatorStateFns, or EvolvedOps the equality is evaluated recursively downwards), and their coefficients are equal.

**Parameters**

**other** (`OperatorBase`) – The `OperatorBase` to compare to self.

**Return type**

`bool`

**Returns**

A bool equal to the equality of self and other.

<span id="undefined" />

`eval(front=None)`

Evaluate the Operator’s underlying function, either on a binary string or another Operator. A square binary Operator can be defined as a function taking a binary function to another binary function. This method returns the value of that function for a given StateFn or binary string. For example, `op.eval('0110').eval('1110')` can be seen as querying the Operator’s matrix representation by row 6 and column 14, and will return the complex value at those “indices.” Similarly for a StateFn, `op.eval('1011')` will return the complex value at row 11 of the vector representation of the StateFn, as all StateFns are defined to be evaluated from Zero implicitly (i.e. it is as if `.eval('0000')` is already called implicitly to always “indexing” from column 0).

If `front` is None, the matrix-representation of the operator is returned.

**Parameters**

**front** (`Union`\[`str`, `dict`, `ndarray`, `OperatorBase`, `Statevector`, `None`]) – The bitstring, dict of bitstrings (with values being coefficients), or StateFn to evaluated by the Operator’s underlying function, or None.

**Return type**

`Union`\[`OperatorBase`, `complex`]

**Returns**

The output of the Operator’s evaluation function. If self is a `StateFn`, the result is a float or complex. If self is an Operator (`PrimitiveOp, ComposedOp, SummedOp, EvolvedOp,` etc.), the result is a StateFn. If `front` is None, the matrix-representation of the operator is returned, which is a `MatrixOp` for the operators and a `VectorStateFn` for state-functions. If either self or front contain proper `ListOps` (not ListOp subclasses), the result is an n-dimensional list of complex or StateFn results, resulting from the recursive evaluation by each OperatorBase in the ListOps.

<span id="undefined" />

`property instance_id`

Return the unique instance id.

**Return type**

`int`

<span id="undefined" />

`property is_measurement`

Whether the StateFn object is a measurement Operator.

**Return type**

`bool`

<span id="undefined" />

`mul(scalar)`

Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`).

**Parameters**

**scalar** (`Union`\[`complex`, `ParameterExpression`]) – The real or complex scalar by which to multiply the Operator, or the `ParameterExpression` to serve as a placeholder for a scalar factor.

**Return type**

`OperatorBase`

**Returns**

An `OperatorBase` equivalent to product of self and scalar.

<span id="undefined" />

`neg()`

Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.

**Return type**

`OperatorBase`

**Returns**

An `OperatorBase` equivalent to the negation of self.

<span id="undefined" />

`property num_qubits`

The number of qubits over which the Operator is defined. If `op.num_qubits == 5`, then `op.eval('1' * 5)` will be valid, but `op.eval('11')` will not.

**Return type**

`int`

**Returns**

The number of qubits accepted by the Operator’s underlying function.

<span id="undefined" />

`property parameters`

Return a set of Parameter objects contained in the Operator.

<span id="undefined" />

`permute(permutation)`

Permute the qubits of the state function.

**Parameters**

**permutation** (`List`\[`int`]) – A list defining where each qubit should be permuted. The qubit at index j of the circuit should be permuted to position permutation\[j].

**Return type**

`OperatorStateFn`

**Returns**

A new StateFn containing the permuted primitive.

<span id="undefined" />

`power(exponent)`

Compose with Self Multiple Times, undefined for StateFns.

**Parameters**

**exponent** (`int`) – The number of times to compose self with self.

**Raises**

**ValueError** – This function is not defined for StateFns.

**Return type**

`OperatorBase`

<span id="undefined" />

`property primitive`

The primitive which defines the behavior of the underlying State function.

<span id="undefined" />

`primitive_strings()`

Return a set of strings describing the primitives contained in the Operator. For example, `{'QuantumCircuit', 'Pauli'}`. For hierarchical Operators, such as `ListOps`, this can help illuminate the primitives represented in the various recursive levels, and therefore which conversions can be applied.

**Return type**

`Set`\[`str`]

**Returns**

A set of strings describing the primitives contained within the Operator.

<span id="undefined" />

`reduce()`

Try collapsing the Operator structure, usually after some type of conversion, e.g. trying to add Operators in a SummedOp or delete needless IGates in a CircuitOp. If no reduction is available, just returns self.

**Return type**

`OperatorBase`

**Returns**

The reduced `OperatorBase`.

<span id="undefined" />

`sample(shots=1024, massive=False, reverse_endianness=False)`

Sample the state function as a normalized probability distribution. Returns dict of bitstrings in order of probability, with values being probability.

**Parameters**

*   **shots** (`int`) – The number of samples to take to approximate the State function.
*   **massive** (`bool`) – Whether to allow large conversions, e.g. creating a matrix representing over 16 qubits.
*   **reverse\_endianness** (`bool`) – Whether to reverse the endianness of the bitstrings in the return dict to match Terra’s big-endianness.

**Returns**

A dict containing pairs sampled strings from the State function and sampling frequency divided by shots.

<span id="undefined" />

`tensor(other)`

Return tensor product between self and other, overloaded by `^`. Note: You must be conscious of Qiskit’s big-endian bit printing convention. Meaning, Plus.tensor(Zero) produces a |+⟩ on qubit 0 and a |0⟩ on qubit 1, or |+⟩⨂|0⟩, but would produce a QuantumCircuit like

> |0⟩– |+⟩–

Because Terra prints circuits and results with qubit 0 at the end of the string or circuit.

**Parameters**

**other** (`OperatorBase`) – The `OperatorBase` to tensor product with self.

**Return type**

`Union`\[`OperatorStateFn`, `TensoredOp`]

**Returns**

An `OperatorBase` equivalent to the tensor product of self and other.

<span id="undefined" />

`tensorpower(other)`

Return tensor product with self multiple times, overloaded by `^`.

**Parameters**

**other** (`int`) – The int number of times to tensor product self with itself via `tensorpower`.

**Return type**

`Union`\[`OperatorBase`, `int`]

**Returns**

An `OperatorBase` equivalent to the tensorpower of self by other.

<span id="undefined" />

`to_circuit_op()`

Return `StateFnCircuit` corresponding to this StateFn. Ignore for now because this is undefined. TODO maybe call to\_pauli\_op and diagonalize here, but that could be very inefficient, e.g. splitting one Stabilizer measurement into hundreds of 1 qubit Paulis.

<span id="undefined" />

`to_density_matrix(massive=False)`

Return numpy matrix of density operator, warn if more than 16 qubits to force the user to set massive=True if they want such a large matrix. Generally big methods like this should require the use of a converter, but in this case a convenience method for quick hacking and access to classical tools is appropriate.

**Return type**

`ndarray`

<span id="undefined" />

`to_matrix(massive=False)`

Note: this does not return a density matrix, it returns a classical matrix containing the quantum or classical vector representing the evaluation of the state function on each binary basis state. Do not assume this is is a normalized quantum or classical probability vector. If we allowed this to return a density matrix, then we would need to change the definition of composition to be \~Op @ StateFn @ Op for those cases, whereas by this methodology we can ensure that composition always means Op @ StateFn.

Return numpy vector of state vector, warn if more than 16 qubits to force the user to set massive=True if they want such a large vector.

**Parameters**

**massive** (`bool`) – Whether to allow large conversions, e.g. creating a matrix representing over 16 qubits.

**Returns**

Vector of state vector

**Return type**

np.ndarray

**Raises**

**ValueError** – Invalid parameters.

<span id="undefined" />

`to_matrix_op(massive=False)`

Return a MatrixOp for this operator.

**Return type**

`OperatorStateFn`

<span id="undefined" />

`to_spmatrix()`

Return SciPy sparse matrix representation of the Operator. Represents the evaluation of the Operator’s underlying function on every combination of basis binary strings.

**Return type**

`spmatrix`

**Returns**

The SciPy `spmatrix` equivalent to this Operator.

<span id="undefined" />

`traverse(convert_fn, coeff=None)`

Apply the convert\_fn to the internal primitive if the primitive is an Operator (as in the case of `OperatorStateFn`). Otherwise do nothing. Used by converters.

**Parameters**

*   **convert\_fn** (`Callable`) – The function to apply to the internal OperatorBase.
*   **coeff** (`Union`\[`complex`, `ParameterExpression`, `None`]) – A coefficient to multiply by after applying convert\_fn. If it is None, self.coeff is used instead.

**Return type**

`OperatorBase`

**Returns**

The converted StateFn.