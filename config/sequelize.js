require('dotenv').config();
const { config } = require('.');

module.exports = {
  development: {
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    host: config.dbHost,
    port: config.dbPort,
    dialect: config.dialect,
  },
};
