'use strict';

let { cheeses } = require('./data/cheeses.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cheeses', cheeses, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cheeses', null, {});
  }
};