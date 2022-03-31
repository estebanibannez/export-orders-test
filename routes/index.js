var express = require("express");
const exportUser = require("../Controller/User");
const exportOrders = require("../Controller/order");

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/downloadExcel", exportUser);

router.get("/downloadOrders", exportOrders);

module.exports = router;
