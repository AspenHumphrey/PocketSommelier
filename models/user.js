'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });

  // User.associate = (models) => {
  //   User.belongsToMany(models.Favorites, {
  //     through: 'UserFavorites'
  //   });
  // }

  return User;
};