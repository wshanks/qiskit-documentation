---
title: validate_json_against_schema
description: API reference for qiskit.validation.jsonschema.validate_json_against_schema
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.validation.jsonschema.validate_json_against_schema
---

<span id="qiskit-validation-jsonschema-validate-json-against-schema" />

# qiskit.validation.jsonschema.validate\_json\_against\_schema

<span id="qiskit.validation.jsonschema.validate_json_against_schema" />

`validate_json_against_schema(json_dict, schema, err_msg=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.16/qiskit/validation/jsonschema/schema_validation.py "view source code")

Validates JSON dict against a schema.

**Parameters**

*   **json\_dict** (*dict*) – JSON to be validated.
*   **schema** (*dict or str*) – JSON schema dictionary or the name of one of the standards schemas in Qiskit to validate against it. The list of standard schemas is: `backend_configuration`, `backend_properties`, `backend_status`, `default_pulse_configuration`, `job_status`, `qobj`, `result`.
*   **err\_msg** (*str*) – Optional error message.

**Raises**

[**SchemaValidationError**](qiskit.validation.jsonschema.SchemaValidationError "qiskit.validation.jsonschema.SchemaValidationError") – Raised if validation fails.

