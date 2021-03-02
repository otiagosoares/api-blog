require('dotenv').config();

const path = require('path');
const environment = process.env.ENVIROMENT || 'development'

const config = require(path.join(__dirname, '../knexfile.js'))[environment];
module.exports = require('knex')(config);