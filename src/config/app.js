const express = require('express');
const morgan = require('morgan');
const { watsonRoutes } = require('../routes');
const cors = require('cors');
require('../database');

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(watsonRoutes);

module.exports = app;
