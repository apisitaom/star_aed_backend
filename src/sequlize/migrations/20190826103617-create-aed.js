'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aeds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      aed: {
        type: Sequelize.INTEGER
      },
      mid: {
        type: Sequelize.INTEGER
      },
      uid: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.JSON
      },
      location: {
        type: Sequelize.STRING
      },
      organid: {
        type: Sequelize.UUID
      },
      group: {
        type: Sequelize.INTEGER
      },
      asw: {
        type: Sequelize.INTEGER
      },
      psw: {
        type: Sequelize.INTEGER
      },
      dsw: {
        type: Sequelize.INTEGER
      },
      contact: {
        type: Sequelize.JSON
      },
      isconnacted: {
        type: Sequelize.BOOLEAN
      },
      ismaintain: {
        type: Sequelize.BOOLEAN
      },
      isdeleted: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aeds');
  }
};