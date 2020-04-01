'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.User,{ foreignKey: 'userId' })
    }
  }
  Book.init({
    userId: DataTypes.INTEGER,
    title: {
      type : DataTypes.STRING,
      valiadate : {
        notNull : {
          args : true,
          msg : 'Title is required'
        }
      }
    },
    imgUrl: DataTypes.STRING
  }, {
    sequelize, 
    modelName:'Book'
  })
  return Book;
};