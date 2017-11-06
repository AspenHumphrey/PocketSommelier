'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserFavorite = sequelize.define('UserFavorite', {
    UserId: DataTypes.INTEGER,
    WineCheeseId: DataTypes.INTEGER
  }, { timestamps: false } );

  return UserFavorite;
};