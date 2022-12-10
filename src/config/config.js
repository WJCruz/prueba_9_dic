require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  dbUser:  process.env.SEQUELIZE_USERNAME,
  dbPassword:  process.env.SEQUELIZE_PASSWORD,
  dbHost:  process.env.SEQUELIZE_HOST,
  dbName:  process.env.SEQUELIZE_DATABASE,
  dbPort:  process.env.SEQUELIZE_PORT,
  dbDialect: process.env.SEQUELIZE_DIALECT,
}

module.exports = { config };
