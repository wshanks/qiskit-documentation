---
title: least_busy
description: API reference for qiskit_ibm_provider.least_busy
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit_ibm_provider.least_busy
---

<span id="least-busy" />

# least\_busy

<span id="qiskit_ibm_provider.least_busy" />

`least_busy(backends)`[GitHub](https://github.com/qiskit/qiskit-ibm-provider/tree/stable/0.9/qiskit_ibm_provider/__init__.py "view source code")

Return the least busy backend from a list.

Return the least busy available backend for those that have a `pending_jobs` in their `status`. Note that local backends may not have this attribute.

**Parameters**

**backends** (`List`\[[`Backend`](https://docs.quantum.ibm.com/api/qiskit/qiskit.providers.Backend "(in Qiskit v0.46)")]) – The backends to choose from.

**Return type**

[`Backend`](https://docs.quantum.ibm.com/api/qiskit/qiskit.providers.Backend "(in Qiskit v0.46)")

**Returns**

The backend with the fewest number of pending jobs.

**Raises**

[**IBMError**](qiskit_ibm_provider.IBMError "qiskit_ibm_provider.IBMError") – If the backends list is empty, or if none of the backends is available, or if a backend in the list does not have the `pending_jobs` attribute in its status.

