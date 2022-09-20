var express = require('express');
const userControllers = require('../../../../Bootcamp We Will Code You/Clases Santiago/travels/server/controllers/userControllers');
const userController = require("../controllers/userControllers");
var router = express.Router();
const multer = require("../middleware/multer");
const multerSingle = require("../middleware/multerSingle");
const verify = require("../middleware/verify");



//1 createUser
//localhost:4000/users/createUser
router.post("/createUser", multer("user"), userControllers.createUser);

module.exports = router;
