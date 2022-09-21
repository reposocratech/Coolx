var express = require('express');
const contactController = require("../controllers/contactController");
var router = express.Router();
const multer = require("../middleware/multer");
const multerSingle = require("../middleware/multerSingle");
const verify = require("../middleware/verify");


// Contact form
// localhost:4000/contact
router.post("/contact", contactController.contact);




module.exports = router;