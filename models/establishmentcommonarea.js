'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EstablishmentCommonArea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EstablishmentCommonArea.init({
    establishmentId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'establishments',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    },
    commonAreaId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'common_areas',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'EstablishmentCommonArea',
    tableName: 'establishment_common_areas',
    underscored: true,
  });
  return EstablishmentCommonArea;
};