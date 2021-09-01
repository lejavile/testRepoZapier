require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 2000,

  cors: process.env.CORS,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  dialect: process.env.DB_DRIVER,
  logging: process.env.SEQUELIZE_LOG === 'true' ? console.log : false,

  microServices: {
    apiUrl:
      process.env.NODE_ENV !== 'production' ? 'http://localhost:2000' : '',
  },
};

module.exports = { config };
