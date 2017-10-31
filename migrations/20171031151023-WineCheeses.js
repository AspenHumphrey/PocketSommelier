'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('WineCheeses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      WineId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          // Sequelize is referencing the table here, which it capitalizes by default, so use the plural of User
          model: 'Wines',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      CheeseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Cheeses',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
      }
    })
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('WineCheeses');
  }
};