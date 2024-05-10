import { Model, DataTypes } from "sequelize";
import sequelize from "@/config/db_connection";

class Location extends Model {}

Location.init(
	{
		// Model attributes are defined here
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		// Other model options go here
		tableName: "locations",
		modelName: "Location",
		sequelize,
		timestamps: false,
	}
);

export default Location;
