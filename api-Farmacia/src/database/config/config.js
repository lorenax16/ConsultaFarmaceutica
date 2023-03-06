require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_ROOT_PASSWORD || "password",
  database: process.env.MYSQL_DATABASE || "db_farmacia",
  host: process.env.MYSQL_HOST || "localhots",
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
