const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config/config');
const post = require('../models/post')

const env = process.env.NODE_ENV || 'development';

const db = {}

db.connection = new Sequelize(config[env]);
db.Post = post(db.connection, DataTypes)

module.exports = db;

// const testConnection = async() => {try {
//   console.log("trying to connect to DB")
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
//   sequelize.close()
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }}

// testConnection()
