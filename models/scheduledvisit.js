'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ScheduledVisit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ScheduledVisit.belongsTo(models.Visitor, {
        foreignKey: 'visitor_id',
        as: 'visitor',
      });
      ScheduledVisit.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
      });
    }
  }
  ScheduledVisit.init({
    visitor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    check_in_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    check_out_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    license_plate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    actual_check_in_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    actual_check_out_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    visit_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    number_of_people: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'ScheduledVisit',
    tableName: 'scheduled_visits',
    underscored: true,
  });
  return ScheduledVisit;
};