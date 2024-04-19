'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Letters', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      released: {
        type: Sequelize.STRING
      },
      background_image: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.FLOAT
      },
      genre: {
        type: Sequelize.STRING
      },
      imgUrl_1: {
        type: Sequelize.STRING
      },
      imgUrl_2: {
        type: Sequelize.STRING
      },
      imgUrl_3: {
        type: Sequelize.STRING
      },
      imgUrl_4: {
        type: Sequelize.STRING
      },
      price: {
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