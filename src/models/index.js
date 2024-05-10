import User from "./User";
import Buyer from "./Buyer";
import Supplier from "./Supplier";
import Location from "./Location";
import Market from "./Market";

User.hasOne(Buyer, {
	foreignKey: "user_id",
	as: "buyers",
});

User.hasOne(Supplier, {
	foreignKey: "user_id",
	as: "suppliers",
});

// Buyer.belongsTo(User, {
// 	foreignKey: "user_id",
// 	as: "user",
// });

// Supplier.belongsTo(User, {
// 	foreignKey: "user_id",
// 	as: "user",
// });

Market.belongsTo(Location, {
	foreignKey: "location_id",
	as: "locations",
});

Location.hasMany(Market, {
	foreignKey: "location_id",
	as: "markets",
});

export { User, Buyer, Supplier, Location, Market };
