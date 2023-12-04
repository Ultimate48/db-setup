'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Follow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Follow.init({
    follower_id: DataTypes.BIGINT,
    following_id: DataTypes.BIGINT,
    combined_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Follow',
  });
  return Follow;
};