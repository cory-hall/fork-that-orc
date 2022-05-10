// init sequelize 
const Sequelize = require('sequelize');

// connection info in here, hidden from repo
require('dotenv').config();


let sequelize;

// create connection both locally and for heroku
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}


module.exports = sequelize;