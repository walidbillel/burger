var express = require("express");
var burger = require("../models/burger.js");

// console.log(burger);

var router = express.Router();

// console.log(router);

// Route to get all the burgers
router.get("/", function(req, res){
    burger.all(function(data){

        // console.log(data);
        
        res.render("index", {burgers: data});
        // console.log(burgerRendered);

    });
});

// Route to create another burger
router.post("/burgers/create", function(req, res){
  
})

