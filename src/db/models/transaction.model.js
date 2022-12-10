const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model');

const TRANSACTION_TABLE = 'transactions';

const TransactionSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  userId: {
    field: 'buyer_user',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}

class Transaction extends Model {

  static associate(models) {
    this.belongsTo(models.User, { as: 'buyer' });
    this.belongsToMany(models.Product, {
      as: 'items',
      through: models.TransactionProduct,
      foreignKey: 'transactionId',
      otherKey: 'productId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TRANSACTION_TABLE,
      modelName: 'Transaction',
      timestamps: false
    }
  }
}

module.exports = { Transaction, TransactionSchema, TRANSACTION_TABLE };
