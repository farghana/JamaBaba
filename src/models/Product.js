import { Model, DataTypes } from "sequelize";
import sequelize from "@/config/db_connection";

class Product extends Model {}

Product.init(
	{
		// Model attributes are defined here
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		category_id: {
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
		tableName: "products",
		sequelize,
		timestamps: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
	}
);

Buyer.associate = (models) => {
	Buyer.belongsTo(models.User);
};

export default Buyer;
