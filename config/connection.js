// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "lyl3nln24eqcxxot.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  username: "c90a5hxzyqqikgq4",
  password: "slacit9v6mu456xo",
  database: "qj46e5t6v44be2bb"
});

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL)

}
else {
  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burger_db"
  });
}


// Make connection.root
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;