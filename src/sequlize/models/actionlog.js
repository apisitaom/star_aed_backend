'use strict';
module.exports = (sequelize, DataTypes) => {
  const actionlog = sequelize.define('actionlog', {
    name: DataTypes.STRING,
    detail: DataTypes.STRING
  }, {});
  actionlog.associate = function(models) {
    // associations can be defined here
  };
  return actionlog;
};