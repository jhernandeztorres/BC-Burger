const burgers = require("../models/burger.js");
const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    burgers.all((data) => {
        let burgers = {
            burgers: data
        };
        console.log(burgers);
        res.render("index", burgers);
    });
});

router.post("/api/burgers", (req,res) => {
    burgers.create([
        "burger_name"
    ],
    [
        req.body.name
    ], (result) => {
        res.json({ id: result.insertId });
    })
})

router.put("/api/burgers/:id", (req,res) => {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);

    burgers.update({
        devoured: req.body.devour
    }, condition, (result) => {
        if (result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;