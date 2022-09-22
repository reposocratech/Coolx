const connection = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class adminControllers {

    // Admin panel general
    // localhost:4000/admin/:userId
    showPanel = (req, res) => {

    };

    // Mostrar todos los usuarios
    // localhost:4000/admin/:userId/allUsers
    getAllUsers = (req, res) => {
        let sql ="SELECT * FROM user "
        connection.query(sql, (error, result)=>{
            if (error){
                res.status(400).json({error});
            }
            res.status(200).json(result);
        });
    };

    // Mostrar todos los proyectos
    // localhost:4000/admin/:userId/allProjects
    getAllProjects = (req, res) => {
        let sql ="SELECT * FROM project "
        connection.query(sql, (error, result)=>{
            if (error){
                res.status(400).json({error});
            }
            res.status(200).json(result);
        });
    };

    // Mostrar todos los árboles
    // localhost:4000/admin/:userId/allTrees
    getAllTrees = (req, res) => {
        let sql ="SELECT * FROM tree "
        connection.query(sql, (error, result)=>{
            if (error){
                res.status(400).json({error});
            }
            res.status(200).json(result);
        });
    };

    // Mostrar un proyecto
    // localhost:4000/admin/:userId/:project_id
    getOneProject = (req, res) => {
        let project_id = req.params.project_id;
        let sql = `SELECT * FROM project WHERE project_id = ${project_id} and is_deleted = 0`;
        connection.query(sql, (error, result) => {
            if (error){
                res.status(400).json({error});
            }
            res.status(200).json(result);
        });
    };

    // Mostrar un usuario
    // localhost:4000/admin/:user_id
    // getOneUser = (req, res) => {
    //     let user_id = req.params.user_id;
    //     let sql = `SELECT * FROM user WHERE user_id = ${user_id} and is_deleted = 0`;
    //     connection.query(sql, (error, result) => {
    //         if (error){
    //             res.status(400).json({error});
    //         }
    //         res.status(200).json(result);
    //     });
    // };

    // Mostrar un árbol
    // localhost:4000/admin/:userId/:tree_id
    // getOneTree = (req, res) => {
    //     let tree_id = req.params.tree_id;
    //     let sql = `SELECT * FROM tree WHERE tree_id = ${tree_id} and is_deleted = 0`;
    //     connection.query(sql, (error, result) => {
    //         if (error){
    //             res.status(400).json({error});
    //         }
    //         res.status(200).json(result);
    //     });
    // };

}

module.exports = new adminControllers();