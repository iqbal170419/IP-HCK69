'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Letters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      released: {
        allowNull: false,
        type: Sequelize.STRING
      },
      background_image: {
        allowNull: false,
        type: Sequelize.STRING
      },
      rating: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      genre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      imgUrl_1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      imgUrl_2: {
        allowNull: false,
        type: Sequelize.STRING
      },
      imgUrl_3: {
        allowNull: false,
        type: Sequelize.STRING
      },
      imgUrl_4: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Letters');
  }
};