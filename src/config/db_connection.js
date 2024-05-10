import { Sequelize } from "sequelize";
import { options } from "../../database/config/config.mjs";

const dbOptions = options;
dbOptions.dialectModule = require("mysql2");

const sequelize = new Sequelize(dbOptions);


export default sequelize;