const joi = require('@hapi/joi');

const asinSchema = joi.string().min(3).max(550);

module.exports = {
  asinSchema,
};
