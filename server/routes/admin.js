var express = require('express');
const adminControllers = require('../controllers/adminControllers');
const contactController = require("../controllers/adminControllers");
var router = express.Router();

// Admin panel general
// localhost:4000/admin/:userId
router.post("/:userId", adminControllers.showPanel);

// Crear nuevo proyecto
// localhost:4000/admin/:userId/newProject
router.post("/:userId/newProject", adminControllers.createNewProject);

// Mostrar todos los usuarios
// localhost:4000/admin/:userId/allUsers
router.post("/:userId/allUsers", adminControllers.getAllUsers);

// Mostrar todos los proyectos
// localhost:4000/admin/:userId/allProjects
router.post("/:userId/allProjects", adminControllers.getAllProjects);

// Mostrar todos los árboles
// localhost:4000/admin/:userId/allTrees
router.post("/:userId/allTrees", adminControllers.getAllTrees);

// Mostrar un proyecto
// localhost:4000/admin/:userId/:project_id
router.post("/:userId/:project_id", adminControllers.getOneProject);

// Mostrar un usuario **** A LA RUTA DE USUARIOS
// localhost:4000/admin/:user_id
//router.post("/:user_id", adminControllers.getOneUser);

// Mostrar un árbol **** A LA RUTA DE ÁRBOLES
// localhost:4000/admin/:userId/:tree_id
// router.post("/:userId/:tree_id", adminControllers.getOneTree);

module.exports = router;