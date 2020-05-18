var express = require("express");
var router = express.Router();
var controller = require("../controllers/product_controller");

router.get("/", controller.findAll);

router.post("/api/add", controller.insertOneApi);

module.exports = router;
