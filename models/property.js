'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Property.belongsTo(models.Establishment, {
        foreignKey: 'establishmentId',
        as: 'establishment',
      });
      Property.belongsTo(models.PropertyType, {
        foreignKey: 'typeId',
        as: 'type',
      });
    }
  }
  Property.init({
    establishmentId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Establishments',
        key: 'id',
      },
      allowNull: false,
    },
    tower: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    typeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'PropertyTypes',
        key: 'id',
      },
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Property',
    tableName: 'properties',
    underscored: true,
  });
  return Property;
};