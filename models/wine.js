'use strict';
module.exports = (sequelize, DataTypes) => {
  var Wine = sequelize.define('Wine', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    flavorProfile: DataTypes.TEXT,
    image: DataTypes.TEXT
  }, { timestamps: false } );

  Wine.associate = (models) => {
    Wine.belongsToMany(models.Cheese, {
      through: 'WineCheeses'
    });
  };

  return Wine;
};