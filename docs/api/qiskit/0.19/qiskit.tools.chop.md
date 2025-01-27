---
title: chop
description: API reference for qiskit.tools.chop
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.tools.chop
---

# chop

<span id="qiskit.tools.chop" />

`chop(array, epsilon=1e-10)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/tools/qi/qi.py "view source code")

Truncate small values of a complex array.

**Parameters**

*   **array** (*array\_like*) – array to truncate small values.
*   **epsilon** (*float*) – threshold.

**Returns**

A new operator with small values set to zero.

**Return type**

np.array

