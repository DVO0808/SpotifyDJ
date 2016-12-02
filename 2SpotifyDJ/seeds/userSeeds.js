'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Users', [{
      userName: 'nisu_joshi',
      email: 'njoshi@gmail.com',
      password: 'incorrect1',
    }, {
      userName: 'lola_olatayo',
      email: 'lolatayo@gmail.com',
      password: 'incorrect2',
    }, {
      userName: 'tonie_marie',
      email: 'ttorres@gmail.com',
      password: 'incorrect3',
    }, {
      userName: 'super_jess',
      email: 'jscott@gmail.com',
      password: 'incorrect4',
    }], {});
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Users', null);
  }
};
