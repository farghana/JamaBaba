import { Model, DataTypes } from "sequelize";
import sequelize from "@/config/db_connection";

class Supplier extends Model {}

Supplier.init(
	{
		// Model attributes are defined here
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		user_id: {
			type: DataTypes.INTEGER.UNSIGNED,
		},
		company_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		address: {
			type: DataTypes.STRING,
		},
		owner_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		contact_first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		contact_last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		contact_phone: {
			type: DataTypes.STRING,
		},
		rating: {
			type: DataTypes.TINYINT,
		},
		market_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
		},
		location_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
		},
	},
	{
		// Other model options go here
		tableName: "suppliers",
		modelName: "Supplier",
		sequelize,
		timestamps: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
	}
);

export default Supplier;
