const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "mysql-ferreypaf.alwaysdata.net", 
  user: process.env.DB_USER || "ferreypaf_back",
  password: process.env.DB_PASSWORD || "cacgrupo10",
  database: process.env.DB_NAME || "ferreypaf_back",
});

connection.connect((error) => {
  if (error) {
    return console.error(error);
  }
  console.log("Conectado");
});

module.exports = connection;