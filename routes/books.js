"use strict";

var express = require("express");
var router = express.Router();
var db = require("./../core/db");


router.get("/", function(req, res, next) {
    db.query("select * from books", (err, rows, fields) => {
        if (err) return;
        res.send({books:rows});
    })
});

module.exports = router;
