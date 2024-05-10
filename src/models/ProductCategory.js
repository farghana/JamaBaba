import { Model, DataTypes } from "sequelize";
import sequelize from "@/config/db_connection";

class ProductCategory extends Model {}

ProductCategory.init(
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
		parent_category_id: {
      type: DataTypes.INTEGER.UNSIGNED,
			defaultValue: 0
		}
	},
	{
		// Other model options go here
		tableName: "product_categories",
    modelName: "ProductCategory",
		sequelize,
		timestamps: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
	}
);

export default ProductCategory;
