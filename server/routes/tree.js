var express = require("express");
const treeControllers = require("../controllers/treeControllers");
var router = express.Router();
const multer = require("../middleware/multer");
const multerSingle = require("../middleware/multerSingle");
const verify = require("../middleware/verify");

//1 create tree
//localhost:4000/tree/createTree
router.post("/createTree", treeControllers.createTree);

//2 borrado logico arbol
//localhost:4000/tree/deleteTree/:tree_id
router.delete("/deleteUser/:tree_id", treeControllers.deleteTree);

module.exports = router;
