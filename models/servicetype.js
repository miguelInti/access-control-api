'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ServiceType.hasMany(models.ServiceVisit, {
        foreignKey: 'service_type_id',
        as: 'serviceVisits',
      });
    }
  }
  ServiceType.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'ServiceType',
    tableName: 'service_types',
    underscored: true,
  });
  return ServiceType;
};