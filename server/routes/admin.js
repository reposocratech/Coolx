var express = require('express');
const adminControllers = require('../controllers/adminControllers');
const contactController = require("../controllers/adminControllers");
var router = express.Router();

// Admin
// localhost:4000/admin
router.post("/", adminControllers.showPanel);

module.exports = router;