---
title: Session
description: API reference for qiskit_ibm_provider.Session
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_provider.Session
---

# Session

<span id="qiskit_ibm_provider.Session" />

`Session(max_time=None)`[GitHub](https://github.com/qiskit/qiskit-ibm-provider/tree/stable/0.9/qiskit_ibm_provider/session.py "view source code")

Class for creating a flexible Qiskit Runtime session.

A Qiskit Runtime `session` allows you to group a collection of iterative calls to the quantum computer. A session is started when the first job within the session is started. Subsequent jobs within the session are prioritized by the scheduler. Data used within a session, such as transpiled circuits, is also cached to avoid unnecessary overhead.

You can open a Qiskit Runtime session using this `Session` class and submit one or more jobs.

**For example::**

from qiskit\_ibm\_provider import IBMProvider

\# Bell Circuit qr = QuantumRegister(2, name=”qr”) cr = ClassicalRegister(2, name=”cr”) qc = QuantumCircuit(qr, cr, name=”bell”) qc.h(qr\[0]) qc.cx(qr\[0], qr\[1]) qc.measure(qr, cr)

backend = IBMProvider().get\_backend(“ibmq\_qasm\_simulator”) backend.open\_session()

job = backend.run(qc) print(f”Job ID: \{job.job\_id()}”) print(f”Result: \{job.result()}”) # Close the session only if all jobs are finished and # you don’t need to run more in the session. backend.cancel\_session()

Session can also be used as a context manager:

```python
with backend.open_session() as session:
    job = backend.run(qc)
    assert job.job_id() == session.session_id
```

Session constructor.

**Parameters**

**max\_time** (`Union`\[`int`, `str`, `None`]) – (EXPERIMENTAL setting, can break between releases without warning) Maximum amount of time, a runtime session can be open before being forcibly closed. Can be specified as seconds (int) or a string like “2h 30m 40s”. This value must be in between 300 seconds and the [system imposed maximum](https://qiskit.org/documentation/partners/qiskit_ibm_runtime/faqs/max_execution_time.html).

**Raises**

**ValueError** – If an input value is invalid.

## Attributes

<span id="qiskit_ibm_provider.Session.active" />

### active

Return the status of the session.

**Return type**

`bool`

**Returns**

True if the session is active, False otherwise.

<span id="qiskit_ibm_provider.Session.session_id" />

### session\_id

Return the session ID.

**Return type**

`str`

**Returns**

Session ID. None until a job runs in the session.

## Methods

### cancel

<span id="qiskit_ibm_provider.Session.cancel" />

`cancel()`

Set the session.\_active status to False

**Return type**

`None`

