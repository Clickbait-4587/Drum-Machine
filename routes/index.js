var express = require("express");
var router = express.Router();

var bankOne = require("../banks").bankOne;
/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "ClickDrum", bankOne });
});

module.exports = router;