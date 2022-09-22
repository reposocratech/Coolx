var express = require('express');
const adminControllers = require('../controllers/adminControllers');
const contactController = require("../controllers/adminControllers");
var router = express.Router();

// Admin panel general
// localhost:4000/admin/:adminId
router.post("/:adminId", adminControllers.showPanel);

// Crear nuevo proyecto
// localhost:4000/admin/:adminId/newProject
router.post("/:adminId/newProject", adminControllers.createNewProject);

// Mostrar todos los usuarios
// localhost:4000/admin/:adminId/allUsers
router.post("/:adminId/allUsers", adminControllers.getAllUsers);

// Mostrar todos los proyectos
// localhost:4000/admin/:adminId/allProjects
router.post("/:adminId/allProjects", adminControllers.getAllProjects);

// Mostrar todos los árboles
// localhost:4000/admin/:adminId/allTrees
router.post("/:adminId/allTrees", adminControllers.getAllTrees);

// Mostrar un proyecto
// localhost:4000/admin/:adminId/:project_id
router.post("/:adminId/:project_id", adminControllers.getOneProject);

// Mostrar un usuario
// localhost:4000/admin/:adminId/:user_id
router.post("/:adminId/:user_id", adminControllers.getOneUser);

// Mostrar un árbol
// localhost:4000/admin/:adminId/:tree_id
router.post("/:adminId/:tree_id", adminControllers.getOneTree);

module.exports = router;