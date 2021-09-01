const express = require('express');
const masterApi = require('./routes/master');
const { config } = require('./config');
const notFoundHandler = require('./utils/middleware/notFoundHandler');
// const db = require('./models');

const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./utils/middleware/errorHandlers');

const app = express();

// Built-in express Body Parser
app.use(express.json());

// Routes
masterApi(app);

// Catch 404
app.use(notFoundHandler);

// Error handlers
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, '0.0.0.0');
console.log(`App listening on port ${config.port}!`);

/* db.sequelize
  .sync()
  .then(() => {
    // populate master table with dummy data
    // db.master.bulkCreate(
    //   times(10, () => ({
    //     userId: random(3, 10),
    //     statusId: 1,
    //   }))
    // );

    app.listen(config.port, '0.0.0.0');
    console.log(`App listening on port ${config.port}!`);
  })
  .catch((err) => {
    console.error('Failed to start the server: ', err);
  }); */
