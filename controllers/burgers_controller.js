const burgers = require("../models/burger.js");
const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    burgers.all((data) => {
        const burger = {burger: data};
        console.log(burger);
        res.render("index", burger);
    });
});

router.post("/api/burgers", (req,res) => {
    burgers.create([
        {burger_name: "burger_name"}
    ],
    [
        req.body.name
    ], (result) => {
        res.json({ id: result.insertId });
    })
})

router.put("/api/burgers/:id", (req,res) => {
    let condition = "id = " + req.params.id;

    burgers.update({
        devoured: req.body.devoured
    }, condition, (result) => {
        if (result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.put("/api/burgers/:id", (req,res) => {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);

    burgers.delete({
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