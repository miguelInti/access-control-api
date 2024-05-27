'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visitor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Visitor.init({
    name: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    identification: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Visitor',
    tableName: 'visitor',
    underscored: true,
  });
  return Visitor;
};