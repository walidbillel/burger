var express = require("express");
var burger = require("../models/burger.js");
// console.log(burger);
var router = express.Router();



// Route to get all the burgers
router.get("/", function (req, res) {
    burger.all(function (burgerData) {
        // console.log(data);
        res.render("index", { burgerData });
        // console.log(burgerRendered);
    });
});


// Route to create another burger
router.post('/burgers', function (req, res) {
    burger.insert(req.body.burger_name, function (result) {
        res.redirect('/');
    })
})

router.put('/burgers', function (req, res) {
    burger.update(req.body.burger_id, function (result) {
        // console.log("Put route result: " + result);
        res.redirect('/');
    })
});

router.delete('/burgers/delete', function (req, res) {
    burger.delete(req.body.burger_name, function (result) {
        res.redirect('/')
    })
});





// exporting the router
module.exports = router;