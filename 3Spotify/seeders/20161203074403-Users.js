'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Amy',
      lastName: 'Elizabeth',
      email: 'aelizabeth@hotmail.com',
      password: 'abc123'
    }, {
      firstName: 'Tim',
      lastName: 'William',
      email: 'twilliam@hotmail.com',
      password: '123abc'
    }, {
      firstName: 'Jess',
      lastName: 'Super',
      email: 'jsuper@hotmail.com',
      password: 'xyz789'
    }, {
      firstName: 'Joshua',
      lastName: 'Tree',
      email: 'jtree@hotmail.com',
      password: '789xyz'
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
