var express = require('express');
const adminControllers = require('../controllers/adminControllers');
const contactController = require("../controllers/adminControllers");
var router = express.Router();

// Admin panel general
// localhost:4000/admin/:userId
router.post("/:userId", adminControllers.showPanel);


// Mostrar todos los usuarios
// localhost:4000/admin/:userId/allUsers
router.post("/:userId/allUsers", adminControllers.getAllUsers);

// Mostrar todos los proyectos
// localhost:4000/admin/:userId/allProjects
router.post("/:userId/allProjects", adminControllers.getAllProjects);

// Mostrar todos los árboles
// localhost:4000/admin/:userId/allTrees
router.post("/:userId/allTrees", adminControllers.getAllTrees);


module.exports = router;