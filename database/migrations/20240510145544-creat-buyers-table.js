'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('buyers', { 
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:false
      },
      contact_first_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      contact_last_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      address:{
        type:Sequelize.STRING
      },
      contact_phone:{
        type: Sequelize.STRING
      },
      rating:{
        type: Sequelize.TINYINT
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });
    await queryInterface.addConstraint("buyers", {
			type: "foreign key",
			fields: ["user_id"],
			name: "user_id",
			references: {
				table: "users",
				key: "id",
				fields: ["id"],
			},
		});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('buyers');
  }
};
