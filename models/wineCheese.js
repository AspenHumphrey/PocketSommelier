'use strict';
module.exports = (sequelize, DataTypes) => {
  var WineCheese = sequelize.define('WineCheese', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    flavorProfile: DataTypes.TEXT,
    image: DataTypes.TEXT
  }, { timestamps: false } );

  WineCheese.associate = (models) => {
    WineCheese.belongsToMany(models.User, {
      through: 'UserFavorites'
    });
  };

  return WineCheese;
};