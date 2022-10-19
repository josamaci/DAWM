'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class auto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  auto.init({
    modelo: DataTypes.STRING,
    puertas: DataTypes.INTEGER,
    fechaDeCompra: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'auto',
  });
  return auto;
};