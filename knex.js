'use strict';

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexFile')[environment];
const knex = require('knex')(knexConfig);

module.exports = knex;