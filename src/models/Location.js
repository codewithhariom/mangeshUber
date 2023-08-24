'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('location', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    user_id:{
        type: DataTypes.UUID,
    },
    longitude:{
        type:DataTypes.STRING,
    },
    latitude:{
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