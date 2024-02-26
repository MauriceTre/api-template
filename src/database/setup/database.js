const { Sequelize } = require("sequelize");

// Connect to MySQL using Sequelize
const todoSequelize = new Sequelize("todo_app", "root", "root1234", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = todoSequelize;
