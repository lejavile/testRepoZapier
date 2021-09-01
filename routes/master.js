// eslint-disable-next-line import/no-unresolved
const express = require('express');
const cors = require('cors');
const MasterService = require('../services/master');

// const { asinSchema } = require('../utils/schemas/master');

// const validationHandler = require('../utils/middleware/validationHandler');

function masterApi(app) {
  const router = express.Router();
  // cors settings
  const corsOptions = {
    origin: '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };

  app.use('/zapier', router);

  const masterService = new MasterService();

  router.get('/test', cors(corsOptions), async (req, res, next) => {
    try {
      const accounts = await masterService.getGreeting();
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
      // res.header("Content-Type", "application/json");
      res.status(200).json({
        success: accounts.success,
        data: accounts.data,
        message: accounts.message,
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = masterApi;
