'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EstablishmentAdmin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EstablishmentAdmin.init({
    establishmentId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Establishments',
        key: 'id',
      },
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'EstablishmentAdmin',
    tableName: 'establishment_admins',
  });
  return EstablishmentAdmin;
};