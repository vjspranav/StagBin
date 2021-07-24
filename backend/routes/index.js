var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "ApiGateway of StagBin",
    url: "https://stagbin.tk",
  });
});

module.exports = router;
