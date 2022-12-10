const express = require('express');

const TransactionService = require('../services/transaction.service');
const validatorHandler = require('../middlewares/validator.handler');
const { getTransactionSchema, createTransactionSchema, updateTransactionSchema, addItemSchema } = require('../schemas/transaction.schema');

const router = express.Router();
const service = new TransactionService();

router.get('/', async (req, res, next) => {
  try {
    const transactions = await service.find();
    res.json(transactions);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getTransactionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const transaction = await service.findOne(id);
      res.json(transaction);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createTransactionSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newTransaction = await service.create(body);
      res.status(201).json(newTransaction);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getTransactionSchema, 'params'),
  validatorHandler(updateTransactionSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getTransactionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/add-item',
  validatorHandler(addItemSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newItem = await service.addItem(body);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
