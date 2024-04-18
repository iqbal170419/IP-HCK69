'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync("./data/favorite.json", "utf-8"));
    data.map((el) => {
      el.updatedAt = new Date();
      el.createdAt = new Date();
    });
    await queryInterface.bulkInsert("Favorites", data);

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete("Favorites", null, {});
  }
};
