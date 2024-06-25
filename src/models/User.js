import { Model, DataTypes } from "sequelize";
import sequelize from "@/config/db_connection";

class User extends Model {}

User.init(
	{
		// Model attributes are defined here
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		password_hash: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		phone: {
			type: DataTypes.STRING,
		},
	},
	{
		// Other model options go here
		tableName: "users",
		modelName: "User",
		sequelize,
		timestamps: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
		defaultScope: {
			// exclude password hash by default
			// attributes: { exclude: ["password_hash"] },
		},
	}
);

export default User;
