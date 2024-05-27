'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VisitDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      VisitDetail.belongsTo(models.ScheduledVisit, {
        foreignKey: 'scheduled_visit_id',
        as: 'scheduledVisit',
      });
      VisitDetail.belongsToMany(models.CommonArea, {
        through: 'VisitDetailCommonArea',
        as: 'commonAreas',
        foreignKey: 'visit_detail_id',
      });
    }
  }
  VisitDetail.init({
    scheduled_visit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'VisitDetail',
    tableName: 'visit_details',
    underscored: true,
  });
  return VisitDetail;
};