const connection = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class projectControllers {

    // Crear nuevo proyecto
    // localhost:4000/projects/newProject/:user_id
    createNewProject = (req, res) => {
        const userId = req.params.user_id;
        const { name, description, location, altitude, latitude, area, status, profit, cost, yearPlanting, isDeleted } = req.body;

        let sql = `INSERT INTO project (project_name, project_description, location, altitude, latitude, area, status, profit, project_cost, year_planting, user_id, is_deleted) VALUES ( '${name}','${description}', '${location}', '${altitude}', '${latitude}', ${area}, ${status}, ${profit}, ${cost}, '${yearPlanting}', ${userId}, 0s)`;

        connection.query(sql, (error, result) => {
        console.log(error);
        error
            ? res.status(400).json({ error })
            : res.status(200).json(result);
        });

    };


}

module.exports = new projectControllers();