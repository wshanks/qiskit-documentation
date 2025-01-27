---
title: QuadraticExpression
description: API reference for qiskit.optimization.problems.QuadraticExpression
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.problems.QuadraticExpression
---

# QuadraticExpression

<span id="qiskit.optimization.problems.QuadraticExpression" />

`QuadraticExpression(quadratic_program, coefficients)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/optimization/problems/quadratic_expression.py "view source code")

Representation of a quadratic expression by its coefficients.

Creates a new quadratic expression.

The quadratic expression can be defined via an array, a list, a sparse matrix, or a dictionary that uses variable names or indices as keys and stores the values internally as a dok\_matrix. We stores values in a compressed way, i.e., values at symmetric positions are summed up in the upper triangle. For example, \{(0, 1): 1, (1, 0): 2} -> \{(0, 1): 3}.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent QuadraticProgram.
*   **coefficients** (`Union`\[`ndarray`, `spmatrix`, `List`\[`List`\[`float`]], `Dict`\[`Tuple`\[`Union`\[`int`, `str`], `Union`\[`int`, `str`]], `float`]]) – The (sparse) representation of the coefficients.

## Attributes

### coefficients

<span id="qiskit.optimization.problems.QuadraticExpression.coefficients" />

`scipy.sparse.dok.dok_matrix`

Returns the coefficients of the quadratic expression.

**Return type**

`dok_matrix`

**Returns**

The coefficients of the quadratic expression.

### quadratic\_program

<span id="qiskit.optimization.problems.QuadraticExpression.quadratic_program" />

`Any`

Returns the parent QuadraticProgram.

**Return type**

`Any`

**Returns**

The parent QuadraticProgram.

## Methods

### \_\_getitem\_\_

<span id="qiskit.optimization.problems.QuadraticExpression.__getitem__" />

`QuadraticExpression.__getitem__(key)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/optimization/problems/quadratic_expression.py "view source code")

Returns the coefficient where i, j can be a variable names or indices.

**Parameters**

**key** (`Tuple`\[`Union`\[`int`, `str`], `Union`\[`int`, `str`]]) – The tuple of indices or names of the variables corresponding to the coefficient.

**Return type**

`float`

**Returns**

The coefficient corresponding to the addressed variables.

### evaluate

<span id="qiskit.optimization.problems.QuadraticExpression.evaluate" />

`QuadraticExpression.evaluate(x)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/optimization/problems/quadratic_expression.py "view source code")

Evaluate the quadratic expression for given variables: x \* Q \* x.

**Parameters**

**x** (`Union`\[`ndarray`, `List`, `Dict`\[`Union`\[`int`, `str`], `float`]]) – The values of the variables to be evaluated.

**Return type**

`float`

**Returns**

The value of the quadratic expression given the variable values.

### to\_array

<span id="qiskit.optimization.problems.QuadraticExpression.to_array" />

`QuadraticExpression.to_array(symmetric=False)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/optimization/problems/quadratic_expression.py "view source code")

Returns the coefficients of the quadratic expression as array.

**Parameters**

**symmetric** (`bool`) – Determines whether the output is in a symmetric form or not.

**Return type**

`ndarray`

**Returns**

An array with the coefficients corresponding to the quadratic expression.

### to\_dict

<span id="qiskit.optimization.problems.QuadraticExpression.to_dict" />

`QuadraticExpression.to_dict(symmetric=False, use_name=False)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/optimization/problems/quadratic_expression.py "view source code")

Returns the coefficients of the quadratic expression as dictionary, either using tuples of variable names or indices as keys.

**Parameters**

*   **symmetric** (`bool`) – Determines whether the output is in a symmetric form or not.
*   **use\_name** (`bool`) – Determines whether to use index or names to refer to variables.

**Return type**

`Dict`\[`Union`\[`Tuple`\[`int`, `int`], `Tuple`\[`str`, `str`]], `float`]

**Returns**

An dictionary with the coefficients corresponding to the quadratic expression.

