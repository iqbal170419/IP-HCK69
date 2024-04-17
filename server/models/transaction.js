'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.Letter, { foreignKey: "gameId" })
      Transaction.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Transaction.init({
    userId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER,
    transactionDate: DataTypes.DATE,
    orderId: DataTypes.STRING,
    transactionToken: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending'
    },
    totalAmount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};