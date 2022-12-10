const { User, UserSchema } = require('./user.model');
const { Category, CategorySchema } = require('./category.model');
const { Product, ProductSchema } = require('./product.model');
const { Transaction, TransactionSchema } = require('./transaction.model');
const { TransactionProduct, TransactionProductSchema } = require('./transaction-product.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Transaction.init(TransactionSchema, Transaction.config(sequelize));
  TransactionProduct.init(TransactionProductSchema, TransactionProduct.config(sequelize));

  User.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Transaction.associate(sequelize.models);
}

module.exports = setupModels;
