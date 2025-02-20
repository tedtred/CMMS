// Example for a Sequelize connection configuration:
const Sequelize = require('sequelize');

const dbConfig = {
  host: process.env.DB_HOST || 'db', // Use 'db' (the service name) by default
  username: process.env.DB_USER || 'cmms_user',
  password: process.env.DB_PASSWORD || 'secret',
  database: process.env.DB_NAME || 'cmms',
  dialect: 'mysql'
};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  // ... other options
});

module.exports = sequelize;
