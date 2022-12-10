const { Model, DataTypes, Sequelize } = require('sequelize');

const { TRANSACTION_TABLE } = require('./transaction.model');
const { PRODUCT_TABLE } = require('./product.model');

const TRANSACTION_PRODUCT_TABLE = 'transactions_products';

const TransactionProductSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  transactionId: {
    field: 'transaction_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: TRANSACTION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  productId: {
    field: 'product_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class TransactionProduct extends Model {

  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: TRANSACTION_PRODUCT_TABLE,
      modelName: 'TransactionProduct',
      timestamps: false
    }
  }
}

module.exports = { TransactionProduct, TransactionProductSchema, TRANSACTION_PRODUCT_TABLE };
