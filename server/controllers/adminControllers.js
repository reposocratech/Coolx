const connection = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class adminControllers {

    // Admin panel general
    // localhost:4000/admin/:adminId
    showPanel = (req, res) => {

    }

    // Crear nuevo proyecto
    // localhost:4000/admin/:adminId/newProject
    createNewProject = (req, res) => {

    }

    // Mostrar todos los usuarios
    // localhost:4000/admin/:adminId/allUsers
    showAllUsers = (req, res) => {

    }

    // Mostrar todos los proyectos
    // localhost:4000/admin/:adminId/allProjects
    showAllProjects = (req, res) => {

    }

    // Mostrar todos los árboles
    // localhost:4000/admin/:adminId/allTrees
    showAllTrees = (req, res) => {

    }

    // Mostrar un proyecto
    // localhost:4000/admin/:adminId/:project_id
    showOneProject = (req, res) => {

    }

    // Mostrar un usuario
    // localhost:4000/admin/:adminId/:user_id
    showOneUser = (req, res) => {

    }

    // Mostrar un árbol
    // localhost:4000/admin/:adminId/:tree_id
    showOneTree = (req, res) => {

    }

}

module.exports = new adminControllers();