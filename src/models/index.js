'use strict';

const fs = require('fs');
const path = require('path');
const {Sequelize, DataTypes} = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User= require('../models/user')(db.sequelize,DataTypes);
db.Address= require('../models/Address')(db.sequelize,DataTypes);
db.Location= require('../models/Location')(db.sequelize,DataTypes);
db.Coustomer= require('../models/Coustomer')(db.sequelize,DataTypes);
db.Driver= require('../models/Driver')(db.sequelize,DataTypes);
db.Request= require('../models/Request')(db.sequelize,DataTypes);

// Assoicition
db.User.hasMany(db.Location);
db.Location.belongsTo(db.User);

db.User.hasOne(db.Driver);
db.User.hasOne(db.Coustomer);






(async () => {
  await sequelize.sync({ force: true });
  // Code here
})()

module.exports = db;
