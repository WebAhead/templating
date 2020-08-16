const { Pool } = require("pg");
require('dotenv').config()

const { DB_URL } = process.env;

if (!DB_URL) {
  throw Error("No Database URL");
}

const option = {
  connectionString: DB_URL
};
module.exports = new Pool(option);
