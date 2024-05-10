import { Model, DataTypes } from "sequelize";
import sequelize from "@/config/db_connection";

class Buyer extends Model {}

Buyer.init(
	{
		// Model attributes are defined here
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		user_id: {
			type: DataTypes.INTEGER.UNSIGNED,
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
		address: {
			type: DataTypes.STRING,
		},
		contact_phone: {
			type: DataTypes.STRING,
		},
		rating: {
			type: DataTypes.TINYINT,
		},
	},
	{
		// Other model options go here
		tableName: "buyers",
		modelName: "Buyer",
		sequelize,
		timestamps: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
	}
);

export default Buyer;
