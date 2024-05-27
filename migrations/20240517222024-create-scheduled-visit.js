'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('scheduled_visits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      visitor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'visitors',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      check_in_time: {
        type: Sequelize.DATE
      },
      check_out_time: {
        type: Sequelize.DATE
      },
      license_plate: {
        type: Sequelize.STRING
      },
      actual_check_in_time: {
        type: Sequelize.DATE
      },
      actual_check_out_time: {
        type: Sequelize.DATE
      },
      visit_status: {
        type: Sequelize.STRING
      },
      token: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      number_of_people: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('scheduled_visits');
  }
};