---
title: OneAgainstRest
description: API reference for qiskit.aqua.components.multiclass_extensions.OneAgainstRest
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.multiclass_extensions.OneAgainstRest
---

<span id="qiskit-aqua-components-multiclass-extensions-oneagainstrest" />

# qiskit.aqua.components.multiclass\_extensions.OneAgainstRest

<span id="qiskit.aqua.components.multiclass_extensions.OneAgainstRest" />

`OneAgainstRest`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/aqua/components/multiclass_extensions/one_against_rest.py "view source code")

The One Against Rest multiclass extension.

For an $n$-class problem, the **one-against-rest** method constructs $n$ SVM classifiers, with the $i$-th classifier separating class $i$ from all the remaining classes, $\forall i \in \{1, 2, \ldots, n\}$. When the $n$ classifiers are combined to make the final decision, the classifier that generates the highest value from its decision function is selected as the winner and the corresponding class label is returned.

### \_\_init\_\_

<span id="qiskit.aqua.components.multiclass_extensions.OneAgainstRest.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                                                      |                                                                                                                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.multiclass_extensions.OneAgainstRest.__init__ "qiskit.aqua.components.multiclass_extensions.OneAgainstRest.__init__")()                                         | Initialize self.                                                                                                                                                                                                                        |
| [`predict`](#qiskit.aqua.components.multiclass_extensions.OneAgainstRest.predict "qiskit.aqua.components.multiclass_extensions.OneAgainstRest.predict")(x)                                           | Applying multiple estimators for prediction.                                                                                                                                                                                            |
| [`set_estimator`](#qiskit.aqua.components.multiclass_extensions.OneAgainstRest.set_estimator "qiskit.aqua.components.multiclass_extensions.OneAgainstRest.set_estimator")(estimator\_cls\[, params]) | Called internally to set `Estimator` and parameters :type estimator\_cls: `Callable`\[\[`List`], `Estimator`] :param estimator\_cls: An `Estimator` class :type params: `Optional`\[`List`] :param params: Parameters for the estimator |
| [`test`](#qiskit.aqua.components.multiclass_extensions.OneAgainstRest.test "qiskit.aqua.components.multiclass_extensions.OneAgainstRest.test")(x, y)                                                 | Testing multiple estimators each for distinguishing a pair of classes.                                                                                                                                                                  |
| [`train`](#qiskit.aqua.components.multiclass_extensions.OneAgainstRest.train "qiskit.aqua.components.multiclass_extensions.OneAgainstRest.train")(x, y)                                              | Training multiple estimators each for distinguishing a pair of classes.                                                                                                                                                                 |

### predict

<span id="qiskit.aqua.components.multiclass_extensions.OneAgainstRest.predict" />

`predict(x)`

Applying multiple estimators for prediction.

**Parameters**

**x** (*numpy.ndarray*) – NxD array

**Returns**

predicted labels, Nx1 array

**Return type**

numpy.ndarray

### set\_estimator

<span id="qiskit.aqua.components.multiclass_extensions.OneAgainstRest.set_estimator" />

`set_estimator(estimator_cls, params=None)`

Called internally to set `Estimator` and parameters :type estimator\_cls: `Callable`\[\[`List`], `Estimator`] :param estimator\_cls: An `Estimator` class :type params: `Optional`\[`List`] :param params: Parameters for the estimator

**Return type**

`None`

### test

<span id="qiskit.aqua.components.multiclass_extensions.OneAgainstRest.test" />

`test(x, y)`

Testing multiple estimators each for distinguishing a pair of classes.

**Parameters**

*   **x** (*numpy.ndarray*) – input points
*   **y** (*numpy.ndarray*) – input labels

**Returns**

accuracy

**Return type**

float

### train

<span id="qiskit.aqua.components.multiclass_extensions.OneAgainstRest.train" />

`train(x, y)`

Training multiple estimators each for distinguishing a pair of classes.

**Parameters**

*   **x** (*numpy.ndarray*) – input points
*   **y** (*numpy.ndarray*) – input labels

**Raises**

**Exception** – given all data points are assigned to the same class, the prediction would be boring

