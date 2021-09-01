const boom = require('@hapi/boom');
// const fs = require('fs');
const { config } = require('../../config');

function withErrorStack(error, stack) {
  if (config.dev) {
    return { ...error, stack };
  }

  return error;
}

function logErrors(err, req, res, next) {
  console.log(err); // eslint-disable-line

  next(err);
}

function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }
}

// eslint-disable-next-line
function errorHandler(err, req, res, next) {
  /* fs.appendFile(`${process.cwd()}/logging.log`, err.stack, function (error) {
    if (error) {
      console.log('NO paso por la escritura');
    } else {
      console.log('paso por la escritura');
    }
  }); */

  const {
    output: { statusCode, payload },
  } = err;

  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler,
};
