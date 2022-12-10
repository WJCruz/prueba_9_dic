const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const description = Joi.string().min(10);
const quantity = Joi.number().integer();
const status = Joi.boolean();
const userId = Joi.number().integer();
const categoryId = Joi.number().integer();

const createProductSchema = Joi.object({
  name: name.required(),
  quantity: quantity.required(),
  description: description.required(),
  status: status.required(),
  userId: userId.required(),
  categoryId: categoryId.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  quantity: quantity,
  status: status,
  description: description,
  userId,
  categoryId
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
