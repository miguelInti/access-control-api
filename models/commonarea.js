'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommonArea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CommonArea.belongsTo(models.Establishment, {
        foreignKey: 'establishmentId',
        as: 'establishment',
      });
    }
  }
  CommonArea.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    establishmentId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Establishments',
        key: 'id',
      },
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'CommonArea',
    tableName: 'common_areas',
    underscored: true,
  });
  return CommonArea;
};