'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
			id: {
				type: Sequelize.INTEGER.UNSIGNED,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			category_id: {
				type: Sequelize.INTEGER.UNSIGNED,
				allowNull: false,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
			},
		});

    await queryInterface.addConstraint("products", {
			type: "foreign key",
			fields: ["category_id"],
			name: "category_id",
			references: {
				table: "product_categories",
				key: "id",
				fields: ["id"],
			},
		});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
