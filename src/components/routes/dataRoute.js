const express = require("express");
const { getData } = require("../controllers/dataController");

// instantiate the router
const router = express.Router();

router.route("/").get(getData);

module.exports = router;
