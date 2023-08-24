'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    number: {
      type: DataTypes.BIGINT,
      allowNull: false,
      //unique: true,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
    },
    isActive:{
      type:DataTypes.BOOLEAN,
      defaultValue:false
    },
    isDelete:{
      type:DataTypes.BOOLEAN,
      defaultValue:false
    }
  }, {
    sequelize,
  });
  return User;
};