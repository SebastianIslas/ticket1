const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USR, process.env.DB_PASS, {
  host: process.env.HOST,
  dialect: 'mssql'
});


module.exports = sequelize;
