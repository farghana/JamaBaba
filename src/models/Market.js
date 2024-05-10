import { Model, DataTypes } from "sequelize";
import sequelize from "@/config/db_connection";

class Market extends Model {}

Market.init(
	{
		// Model attributes are defined here
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		location_id: {
			type: DataTypes.INTEGER.UNSIGNED,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		// Other model options go here
		tableName: "markets",
		modelName: "Market",
		sequelize,
		timestamps: false,
	}
);

export default Market;
