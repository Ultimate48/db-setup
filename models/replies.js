'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Replies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Replies.init({
    user_id: DataTypes.BIGINT,
    post_id: DataTypes.BIGINT,
    reply_content: DataTypes.TEXT,
    replied_at: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Replies',
  });
  return Replies;
};