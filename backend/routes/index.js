var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", {
    title: "ApiGateway of StagBin",
    url: "https://stagb.in",
  });
});

module.exports = router;
