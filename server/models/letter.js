'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Letter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Letter.hasMany(models.Transaction, { foreignKey: "gameId" })
    }
  }
  Letter.init({
    name: DataTypes.STRING,
    released: DataTypes.STRING,
    background_image: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    genre: DataTypes.STRING,
    imgUrl_1: DataTypes.STRING,
    imgUrl_2: DataTypes.STRING,
    imgUrl_3: DataTypes.STRING,
    imgUrl_4: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Letter',
  });
  return Letter;
};