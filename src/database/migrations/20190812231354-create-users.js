'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:{
        allowNull: false,
        type: Sequelize.STRING
      },
      email:{
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      avatar: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password_hash:{
        allowNull: false,
        type: Sequelize.STRING
      },
      provider: {
        allowNull: false,
        defaulValue: false,
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATA
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATA
      }
    })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users');
  }
};

// Comando para criar o DB: npx sequelize db:migrate
