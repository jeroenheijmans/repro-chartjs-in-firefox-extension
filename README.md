# Repro for ChartJS issue inside Firefox Extensions

This repository is purely meant as a repro for a specific Chart.js issue.

## Instructions

1. Clone this repo.
1. Open Firefox, go to `about:debugging`.
1. Choose "Load Temporary Add-on..." and pick the `manifest.json` file
1. In a new tab, go to [https://github.com/*](https://github.com/chartjs/Chart.js) where the extension does its magic

Results:

- Actual: no graph is shown, just an empty space.
- Expected: graph shown, as it would when you open `index.html` from this repository (or when you'd open it as a Chrome extension)
