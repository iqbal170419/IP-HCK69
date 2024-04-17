"use strict";
const { Model } = require("sequelize");
const { hashing } = require("../helpers");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Transaction, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      userName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
    },
    {
      hooks: {
        beforeCreate: (user) => {
          user.password = hashing(user.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
