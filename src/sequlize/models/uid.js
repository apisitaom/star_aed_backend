'use strict';
module.exports = (sequelize, DataTypes) => {
  const uid = sequelize.define('uid', {
    uid: DataTypes.INTEGER
  }, {});
  uid.associate = function(models) {
    // associations can be defined here
  };
  return uid;
};