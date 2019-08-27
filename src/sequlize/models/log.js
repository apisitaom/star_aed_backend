'use strict';
module.exports = (sequelize, DataTypes) => {
  const log = sequelize.define('log', {
    mid: DataTypes.INTEGER,
    action: DataTypes.STRING
  }, {});
  log.associate = function(models) {
    // associations can be defined here
  };
  return log;
};