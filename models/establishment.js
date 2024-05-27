'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Establishment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Establishment.belongsTo(models.EstablishmentType, {
        foreignKey: 'typeId',
        as: 'type',
      });
      Establishment.hasMany(models.Property, {
        foreignKey: 'establishmentId',
        as: 'properties',
      });
      Establishment.belongsToMany(models.CommonArea, {
        through: 'EstablishmentCommonArea',
        as: 'commonAreas',
        foreignKey: 'establishmentId',
      });
    }
  }
  Establishment.init({
    rut: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    typeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'establishment_types',
        key: 'id',
      },
      allowNull: false,
    },
    legalRepresentative: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    towerCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    apartmentCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    commune: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Establishment',
    tableName: 'establishments',
    underscored: true,
  });
  return Establishment;
};