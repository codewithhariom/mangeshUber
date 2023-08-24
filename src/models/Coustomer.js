'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('customer', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    user_id:{
        type: DataTypes.UUID,
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
  return Customer;
};