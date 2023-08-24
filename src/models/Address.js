'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    street:{
        type:DataTypes.STRING,
        allowNull: false
    },
    city:{
        type:DataTypes.STRING,
        allowNull: false
    },
    state:{
        type:DataTypes.STRING,
        allowNull: false
    },
    zipcode:{
        type:DataTypes.STRING,
        allowNull: false
    },
    country:{
        type:DataTypes.STRING,
        allowNull: false
    },
    
  }, {
    sequelize
  });
 
  return Address;
};