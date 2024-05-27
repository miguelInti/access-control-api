'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VisitDetailCommonArea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VisitDetailCommonArea.init({
    visit_detail_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'VisitDetails',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    common_area_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CommonAreas',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  }, {
    sequelize,
    modelName: 'VisitDetailCommonArea',
    tableName: 'visit_detail_common_areas',
    underscored: true,
  });
  return VisitDetailCommonArea;
};