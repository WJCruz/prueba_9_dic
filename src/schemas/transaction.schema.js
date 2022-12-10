const Joi = require('joi');

const id = Joi.number().integer();
const userId = Joi.number().integer();
const transactionId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer().min(1);

const getTransactionSchema = Joi.object({
  id: id.required(),
});

const createTransactionSchema = Joi.object({
  userId: userId.required(),
});

const updateTransactionSchema = Joi.object({
  productId: productId,
  amount: amount,
});

const addItemSchema = Joi.object({
  transactionId: transactionId.required(),
  productId: productId.required(),
  amount: amount.required(),
});

module.exports = { getTransactionSchema, createTransactionSchema, updateTransactionSchema, addItemSchema };
