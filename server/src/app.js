const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { errorHandler } = require('./middleware/errorHandler');
const { search } = require('./controllers/search');

const app = express();

const corsOptions = {
  exposedHeaders: ['x-list-page-size', 'x-list-current-page', 'x-list-total-rows', 'x-list-total-pages']
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.get('/api', search);

app.use(errorHandler);
module.exports = app;