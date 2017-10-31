'use strict';

let { wineCheeses } = require('./data/wineCheeses.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('WineCheeses', wineCheeses, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('WineCheeses', null, {});
    
  }
};
