'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SystemConfig extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SystemConfig.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    id_application: DataTypes.INTEGER,
    value: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'SystemConfig',
    underscored: true,
    tableName: 'system_configs',
  });
  return SystemConfig;
};