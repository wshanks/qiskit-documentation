---
title: iplot_error_map
description: API reference for qiskit_ibm_provider.visualization.iplot_error_map
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit_ibm_provider.visualization.iplot_error_map
---

<span id="iplot-error-map" />

# iplot\_error\_map

<span id="qiskit_ibm_provider.visualization.iplot_error_map" />

`iplot_error_map(backend, figsize=(800, 500), show_title=True, remove_badcal_edges=True, background_color='white', as_widget=False)`[GitHub](https://github.com/qiskit/qiskit-ibm-provider/tree/stable/0.8/qiskit_ibm_provider/visualization/interactive/error_map.py "view source code")

Plot the error map of a device.

**Parameters**

*   **backend** ([`IBMBackend`](qiskit_ibm_provider.IBMBackend "qiskit_ibm_provider.ibm_backend.IBMBackend")) – Plot the error map for this backend.
*   **figsize** (`Tuple`\[`int`]) – Figure size in pixels.
*   **show\_title** (`bool`) – Whether to show figure title.
*   **remove\_badcal\_edges** (`bool`) – Whether to remove bad CX gate calibration data.
*   **background\_color** (`str`) – Background color, either ‘white’ or ‘black’.
*   **as\_widget** (`bool`) – `True` if the figure is to be returned as a `PlotlyWidget`. Otherwise the figure is to be returned as a `PlotlyFigure`.

**Return type**

`Union`\[`PlotlyFigure`, `PlotlyWidget`]

**Returns**

The error map figure.

**Raises**

*   **VisualizationValueError** – If an invalid input is received.
*   **VisualizationTypeError** – If the specified backend is a simulator.

**Example**

```python
from qiskit_ibm_provider import IBMProvider
from qiskit_ibm_provider.visualization import iplot_error_map

provider = IBMProvider(group='open', project='main')
backend = provider.get_backend('ibmq_vigo')

iplot_error_map(backend, as_widget=True)
```

