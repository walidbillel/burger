// Requiring the connection.js in the same folder
var connection = require("./connection");

// console.log(connection);

var orm = {
    // Select All The Burgers in the database
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    // Insert one burger
    insertOne: function (table, val, cb) {

        connection.query("INSERT INTO " + table + " (burger_name) VALUES ('" + val + "');", function (err, result) {

            if (err) throw err;

            console.log(result);
        });

    },

    // Update one burger
    updateOne: function (table, idUpdated, cb) {
        connection.query('UPDATE ' + table + ' SET devoured=true WHERE id= ' + idUpdated + ';', function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    // delete One Burger
    deleteOne: function (table, idDeleted, cb) {
        connection.query('DELETE FROM ' + table + ' WHERE id= ' + idDeleted + ';', function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }

}


// Export ORM
module.exports = orm;




