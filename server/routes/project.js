var express = require('express');
const multer = require("../middleware/multer");
const projectControllers = require("../controllers/projectControllers");
var router = express.Router();
const verify = require("../middleware/verify");

// Crear nuevo proyecto
// localhost:4000/project/newProject/:user_id
router.post("/newProject/:user_id", projectControllers.createNewProject);

// Editar proyecto
// localhost:4000/project/editProject/:project_id
router.post("/editProject/:project_id", projectControllers.editProject);

// Mostrar la infomación de un proyecto
// localhost:4000/project/:project_id
router.post("/project/:project_id", projectControllers.getProject);

// Eliminar un proyecto
// localhost:4000/project/deleteProject/:project_id
router.post("/project/deleteProject/:project_id", projectControllers.deleteProject);