const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const { Meeting } = require('../models');

const connection = new Sequelize(dbConfig);

Meeting.init(connection);

module.exports = connection;
