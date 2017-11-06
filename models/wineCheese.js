'use strict';
module.exports = (sequelize, DataTypes) => {
  var WineCheese = sequelize.define('WineCheese', {
    WineId: DataTypes.INTEGER,
    CheeseId: DataTypes.INTEGER
  }, { timestamps: false } );

  WineCheese.associate = (models) => {
    WineCheese.belongsToMany(models.User, {
      through: 'UserFavorites'
    });
  };

  return WineCheese;
};