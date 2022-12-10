const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./models');

const options = {
  dialect: config.dbDialect,
  host: config.dbHost,
  port: parseInt(config.dbPort),
  logging: false,
}

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, options);

sequelize.sync({ alter: false })

setupModels(sequelize);

module.exports = sequelize;
