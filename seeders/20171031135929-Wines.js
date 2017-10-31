'use strict';

let { wines } = require('./data/wines.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Wines', wines, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Wines', null, {});
  }
};
