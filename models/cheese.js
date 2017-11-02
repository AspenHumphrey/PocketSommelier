'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cheese = sequelize.define('Cheese', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    flavorProfile: DataTypes.TEXT,
    image: DataTypes.TEXT
  }, { timestamps: false } );

  Cheese.associate = (models) => {
    Cheese.belongsToMany(models.Wine, {
      through: 'WineCheeses'
    });
  };

  return Cheese;
};