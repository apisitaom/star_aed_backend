'use strict';
module.exports = (sequelize, DataTypes) => {
  const organization = sequelize.define('organization', {
    organizname: DataTypes.STRING
  }, {});
  organization.associate = function(models) {
    // associations can be defined here
  };
  return organization;
};