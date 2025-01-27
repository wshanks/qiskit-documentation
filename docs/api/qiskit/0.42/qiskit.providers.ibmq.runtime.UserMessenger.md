---
title: UserMessenger
description: API reference for qiskit.providers.ibmq.runtime.UserMessenger
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ibmq.runtime.UserMessenger
---

<Admonition title="Warning" type="caution">
  The package `qiskit-ibmq-provider` is being deprecated and its repo is going to be archived soon. Please transition to the new packages. More information in [https://ibm.biz/provider\_migration\_guide](https://ibm.biz/provider_migration_guide)
</Admonition>

# UserMessenger

<span id="qiskit.providers.ibmq.runtime.UserMessenger" />

`UserMessenger`[GitHub](https://github.com/qiskit/qiskit-ibmq-provider/tree/stable/0.20/qiskit/providers/ibmq/runtime/program/user_messenger.py "view source code")

Bases: `object`

Base class for handling communication with program users.

This class can be used when writing a new Qiskit Runtime program.

## Methods

<Admonition title="Warning" type="caution">
  The package `qiskit-ibmq-provider` is being deprecated and its repo is going to be archived soon. Please transition to the new packages. More information in [https://ibm.biz/provider\_migration\_guide](https://ibm.biz/provider_migration_guide)
</Admonition>

### publish

<span id="qiskit.providers.ibmq.runtime.UserMessenger.publish" />

`UserMessenger.publish(message, encoder=<class 'qiskit.providers.ibmq.runtime.utils.RuntimeEncoder'>, final=False)`[GitHub](https://github.com/qiskit/qiskit-ibmq-provider/tree/stable/0.20/qiskit/providers/ibmq/runtime/program/user_messenger.py "view source code")

Publish message.

You can use this method to publish messages, such as interim and final results, to the program user. The messages will be made immediately available to the user, but they may choose not to receive the messages.

The final parameter is used to indicate whether the message is the final result of the program. Final results may be processed differently from interim results.

**Parameters**

*   **message** (`Any`) – Message to be published. Can be any type.
*   **encoder** (`Type`\[`JSONEncoder`]) – An optional JSON encoder for serializing
*   **final** (`bool`) – Whether the message being published is the final result.

**Return type**

`None`

