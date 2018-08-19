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

router.get("/api/burgers", function(req, res){
    burger.all(function(burgerData){
        res.json(burgerData);
    })
})


// Route to create another burger
router.post('/burgers/create', function (req, res) {
    burger.insert(req.body.burger_name, function (result) {
        res.redirect('/');
    });
});

router.put('/api/burgers/:id', function (req, res) {

    burger.update(req.params.id, function (result) {
        // console.log(result);

        res.redirect('/');
    });
});


// exporting the router
module.exports = router;