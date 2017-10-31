'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cheese = sequelize.define('Cheese', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    flavorProfile: DataTypes.TEXT,
    image: DataTypes.STRING
  }, { timestamps: false } );

  Cheese.associate = (models) => {
    Cheese.belongsToMany(models.Wine, {
      through: 'WineCheeses',
      foreignKey: 'cheeseId'
    });
  };

  return Cheese;
};