// Requiring the connection.js in the same folder
var connection = require("./connection");

// console.log(connection);

var orm = {
    // Select All The Burgers in the database
    selectAll: function (table, cb) {
        // creating the queryString 
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    // Insert one burger
    insertOne: function (table, val, cb) {
        // creating the queryString 
        var queryString = "INSERT INTO " + table + " (burger_name) VALUES ('" + val + "');";
        connection.query(queryString, function (err, result) {

            if (err) throw err;
            cb(result);
        });
    },

    // Update one burger
    updateOne: function (table, idUpdated, cb) {
        var queryString = 'UPDATE ' + table + ' SET devoured=true WHERE id= ' + idUpdated + ';';
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    // delete One Burger
    // deleteOne: function (table, idDeleted, cb) {
    //     var queryString = 'DELETE FROM ' + table + ' WHERE id= ' + idDeleted + ';';
    //     connection.query(queryString, function (err, result) {
    //         if (err) throw err;
    //         cb(result);
    //     });
    // }

}

// orm.insertOne("burgers", "Cheese Steak Burger");
// orm.selectAll("burgers");


// Export ORM
module.exports = orm;




