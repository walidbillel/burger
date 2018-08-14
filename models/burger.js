var orm = require("../config/orm.js");

// console.log(orm);

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insert: function (val, cb) {
        orm.insertOne("burgers", val, function (res) {
            cb(res);
        });
    },
    update: function (updatedId, cb) {
        orm.updateOne("burgers", updatedId, function (res) {
            cb(res);
        });
    },

    // delete: function (idDeleted, cb) {
    //     orm.deleteOne("burgers", idDeleted, function (res) {
    //         cb(res);
    //     });
    // }
};





// Export the database functions for the controller (catsController.js).
module.exports = burger;