// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "lyl3nln24eqcxxot.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "c90a5hxzyqqikgq4",
  password: "nj6h4zvart39f128",
  database: "qj46e5t6v44be2bb"
});

// Make connection.root
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;