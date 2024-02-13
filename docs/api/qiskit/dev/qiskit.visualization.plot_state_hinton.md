---
title: plot_state_hinton
description: API reference for qiskit.visualization.plot_state_hinton
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.visualization.plot_state_hinton
---

<span id="qiskit-visualization-plot-state-hinton" />

# qiskit.visualization.plot\_state\_hinton

<span id="qiskit.visualization.plot_state_hinton" />

`qiskit.visualization.plot_state_hinton(state, title='', figsize=None, ax_real=None, ax_imag=None, *, filename=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/visualization/state_visualization.py "view source code")

Plot a hinton diagram for the density matrix of a quantum state.

The hinton diagram represents the values of a matrix using squares, whose size indicate the magnitude of their corresponding value and their color, its sign. A white square means the value is positive and a black one means negative.

**Parameters**

*   **state** ([*Statevector*](qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")  *or*[*DensityMatrix*](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") *or ndarray*) – An N-qubit quantum state.
*   **title** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – a string that represents the plot title
*   **figsize** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.12)")) – Figure size in inches.
*   **filename** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – file path to save image to.
*   **ax\_real** ([*matplotlib.axes.Axes*](https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.8.2)")) – An optional Axes object to be used for the visualization output. If none is specified a new matplotlib Figure will be created and used. If this is specified without an ax\_imag only the real component plot will be generated. Additionally, if specified there will be no returned Figure since it is redundant.
*   **ax\_imag** ([*matplotlib.axes.Axes*](https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.8.2)")) – An optional Axes object to be used for the visualization output. If none is specified a new matplotlib Figure will be created and used. If this is specified without an ax\_imag only the real component plot will be generated. Additionally, if specified there will be no returned Figure since it is redundant.

**Returns**

The matplotlib.Figure of the visualization if neither ax\_real or ax\_imag is set.

**Return type**

[`matplotlib.figure.Figure`](https://matplotlib.org/stable/api/figure_api.html#matplotlib.figure.Figure "(in Matplotlib v3.8.2)")

**Raises**

*   [**MissingOptionalLibraryError**](exceptions#qiskit.exceptions.MissingOptionalLibraryError "qiskit.exceptions.MissingOptionalLibraryError") – Requires matplotlib.
*   [**VisualizationError**](visualization#qiskit.visualization.VisualizationError "qiskit.visualization.VisualizationError") – if input is not a valid N-qubit state.

**Examples**

```python
import numpy as np
from qiskit import QuantumCircuit
from qiskit.quantum_info import DensityMatrix
from qiskit.visualization import plot_state_hinton

qc = QuantumCircuit(2)
qc.h([0, 1])
qc.cz(0,1)
qc.ry(np.pi/3 , 0)
qc.rx(np.pi/5, 1)

state = DensityMatrix(qc)
plot_state_hinton(state, title="New Hinton Plot")
```

![../\_images/qiskit-visualization-plot\_state\_hinton-1.png](/images/api/qiskit/dev/qiskit-visualization-plot_state_hinton-1.png)
