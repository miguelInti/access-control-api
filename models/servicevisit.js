'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceVisit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ServiceVisit.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
      });
      ServiceVisit.belongsTo(models.ServiceType, {
        foreignKey: 'service_type_id',
        as: 'serviceType',
      });
    }
  }
  ServiceVisit.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    service_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    license_plate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    photo_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'ServiceVisit',
    tableName: 'service_visits',
    underscored: true,
  });
  return ServiceVisit;
};