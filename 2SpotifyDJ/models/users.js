'use strict';

var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING(40),
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Date.now()
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Date.now()
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Users;
};
