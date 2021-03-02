const path = require('path');
const environment = proces.env.ENVIROMENT || 'development'
const config = require(path.join(__dirname, 'knexfile.js'))[environment];
module.exports = require('knex')(config);