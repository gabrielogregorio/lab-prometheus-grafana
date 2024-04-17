const express = require('express');
const promBundle = require('express-prom-bundle');
const cors = require('cors');
const app = express();

const metricsMiddleware = promBundle({
  includeMethod: true,
  includePath: true,
  includeStatusCode: true,
  includeUp: true,
  customLabels: {
    project_name: 'hello_world',
    project_type: 'test_metrics_labels',
  },
  promClient: {
    collectDefaultMetrics: {},
  },
});

app.use(metricsMiddleware); // NEEDS FIRST ROUTER

app.use(cors('*'));

app.get('/', function (req, res) {
  res.send('Hello d32d');
});

app.listen(3333);
