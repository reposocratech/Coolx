var express = require('express');
const userControllers = require("../controllers/userControllers");
var router = express.Router();


// 2. User login
// localhost:4000/users/login
router.post("/login", userControllers.login);

module.exports = router;
