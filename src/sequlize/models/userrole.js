'use strict';
module.exports = (sequelize, DataTypes) => {
  const userrole = sequelize.define('userrole', {
    userrolename: DataTypes.STRING,
    action: DataTypes.ARRAY(DataTypes.STRING)

  }, {});
  userrole.associate = function(models) {
    // associations can be defined here
  };
  return userrole;
};