const Sequelize = require('sequelize');

const componentSequelize = new Sequelize('dbProduto', 'root', 'password',
{
  dialect: 'mysql', host: 'localhost'
});

module.exports = componentSequelize;
