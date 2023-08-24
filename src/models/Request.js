'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('location', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    driver_id:{
        type:DataTypes.STRING,
    },
    customer_id:{
        type:DataTypes.STRING,
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
  return Location;
};