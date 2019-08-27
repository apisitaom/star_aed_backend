'use strict';
module.exports = (sequelize, DataTypes) => {
  const aed = sequelize.define('aed', {
    aed: DataTypes.INTEGER,
    mid: DataTypes.INTEGER,
    uid: DataTypes.INTEGER,
    address: DataTypes.JSON,
    location: DataTypes.STRING,
    organid: DataTypes.UUID,
    group: DataTypes.INTEGER,
    asw: DataTypes.INTEGER,
    psw: DataTypes.INTEGER,
    dsw: DataTypes.INTEGER,
    contact: DataTypes.JSON,
    isconnacted: DataTypes.BOOLEAN,
    ismaintain: DataTypes.BOOLEAN,
    isdeleted: DataTypes.BOOLEAN
  }, {});
  aed.associate = function(models) {
    // associations can be defined here
  };
  return aed;
};