const boom = require('@hapi/boom');

const { models } = require('./../db/sequelize');

class TransactionService {

  constructor() {}

  async create(data) {
    const newTransaction = await models.Transaction.create(data);
    return newTransaction;
  }

  async addItem(data) {
    const newItem = await models.TransactionProduct.create(data);
    return newItem;
  }

  async find() {
    const transactions = await models.Transaction.findAll();
    return transactions;
  }

  async findOne(id) {
    const transaction = await models.Transaction.findByPk(id, {
      include: [
        {
          association: 'buyer',
          include: ['user']
        },
        'items'
      ]
    });
    if(!transaction){
      throw boom.notFound('transaction not found');
    }
    return transaction;
  }

  async update(id, changes) {
    const transaction = await this.findOne(id);
    const rta = await transaction.update(changes);
    return rta;
  }

  async delete(id) {
    const transaction = await this.findOne(id);
    await transaction.destroy();
    return { id };
  }

}

module.exports = TransactionService;
