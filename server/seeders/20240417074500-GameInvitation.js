'use strict';
if (process.env.NODE_ENV !== "production") {
  require('dotenv').config()
}

const { default: axios } = require('axios');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const arr = []
    console.log(process.env);
    try {
      const response = await axios(
        {
          method: 'GET',
          url: 'https://api.rawg.io/api/games?key=' + process.env.API_KEY_RAWG,
        }
      )

      const { data } = await axios(
        {
          method: 'GET',
          url: 'https://api.rawg.io/api/games?key=' + process.env.API_KEY_RAWG + '&page=2',
        }
      )

      response.data.results.map(item => {
        arr.push({
          name: item.name,
          released: item.released,
          background_image: item.background_image,
          rating: item.rating,
          genre: item.genres[0].name,
          imgUrl_1: item.short_screenshots[0].image,
          imgUrl_2: item.short_screenshots[1].image,
          imgUrl_3: item.short_screenshots[2].image,
          imgUrl_4: item.short_screenshots[3].image,
          price: Math.floor(Math.random() * (100 - 50 + 1) + 50) * 1000,
          createdAt: new Date(),
          updatedAt: new Date()
        })
      })

      data.results.map(item => {
        arr.push({
          name: item.name,
          released: item.released,
          background_image: item.background_image,
          rating: item.rating,
          genre: item.genres[0].name,
          imgUrl_1: item.short_screenshots[0].image,
          imgUrl_2: item.short_screenshots[1].image,
          imgUrl_3: item.short_screenshots[2].image,
          imgUrl_4: item.short_screenshots[3].image,
          price: Math.floor(Math.random() * (100 - 50 + 1) + 50) * 1000,
          createdAt: new Date(),
          updatedAt: new Date()
        })
      })
    } catch (error) {
      console.log(error);
    }


    console.log(arr);

    await queryInterface.bulkInsert('Letters', arr, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Letters', null, {});
  }
};
