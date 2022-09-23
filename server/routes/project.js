var express = require('express');
const projectControllers = require("../controllers/projectControllers");
var router = express.Router();
const verify = require("../middleware/verify");

// Crear nuevo proyecto
// localhost:4000/project/newProject/:user_id
router.post("/newProject/:user_id", projectControllers.createNewProject);

// Editar proyecto
// localhost:4000/project/editProject/:project_id
router.post("/editProject/:project_id", projectControllers.editProject);

