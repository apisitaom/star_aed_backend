'use strict';
module.exports = (sequelize, DataTypes) => {
  const action = sequelize.define('action', {
    actionname: DataTypes.STRING,
    actiongroup: DataTypes.STRING
  }, {});
  action.associate = function(models) {
    // associations can be defined here
  };
  return action;
};