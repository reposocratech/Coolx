const connection = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class projectControllers {
  // Crear nuevo proyecto
  // localhost:4000/project/newProject/:user_id

  createNewProject = (req, res) => {
    console.log(req.body.newProject);

    const data = JSON.parse(req.body.newProject);

    console.log(data);

    let img = [""];

    if (req.files != undefined) {
      img = req.files;
      // console.log("************************", img);
    }

    const {
      projectName,
      projectDescription,
      location,
      altitude,
      latitude,
      area,
      profit,
      projectCost,
      yearPlanting,
      user_id,
    } = data;

    console.log(projectName);

    let sql = `INSERT INTO project (project_name, project_description, location, altitude, latitude, area, profit, project_cost, year_Planting, user_id) VALUES ('${projectName}','${projectDescription}', '${location}', '${altitude}', '${latitude}', "${area}", '${profit}', '${projectCost}', '${yearPlanting}','${user_id}')`;

    let sqlProject = `SELECT * FROM project WHERE user_id = ${user_id} and is_deleted = 0`;

    connection.query(sql, (error, result) => {
      // error && res.status(400).json({ error })
      // : res.status(200).json(result);

      let project_id = result.insertId;
      this.saveProjectImages(img, project_id);

      connection.query(sqlProject, (err, resultProject) => {
        if (err) throw err;
        res.status(200).json({ resultProject, result });
      });
    });
  };

  //Guardar imágenes de los proyectos (no es una ruta, solo función)
  saveProjectImages = (images, project_id, next) => {
    let img = images;

    var time = new Date();

    let date_img = new Date(time);

    console.log("Esta es la imagen", img, project_id, date_img);

    img.forEach((img) => {
      let sql = `INSERT INTO image (file_name, date_img, project_id) VALUES ('${img.filename}','${date_img}','${project_id}')`;
      connection.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
      });
    });
  };

  // Editar proyecto
  // localhost:4000/project/editProject/:project_id
  editProject = (req, res) => {
      let project_id = req.params.project_id;
      console.log(project_id);
      console.log(req.body, "ESTO ES EL BODY");
    const {
      project_name,
      project_description,
      location,
      altitude,
      latitude,
      area,
      profit,
      project_cost,
    } = req.body;
    
    
    let sql = `UPDATE project SET project_name='${project_name}', project_description='${project_description}', location = '${location}', altitude = '${altitude}', latitude = '${latitude}', area = ${area}, profit = ${profit}, project_cost = ${project_cost}  WHERE project_id = ${project_id}`;
    console.log(sql);

    connection.query(sql, (error, result) => {
      if(error) throw error;
      error ? res.status(400).json({ error }) : res.status(200).json(req.body);
    });
  };

  //Editar status de proyecto
  //localhost:4000/project/editStatusProject/:project_id
  editStatusProject = (req, res) => {
    const { status } = req.body;
    console.log("llega status: " + status);
    const project_Id = req.params.project_id;

    let sql = `UPDATE project SET status = "${status}" WHERE project_id = ${project_Id}`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  // Mostrar la infomación de un proyecto
  // localhost:4000/project/:project_id
  getProject = (req, res) => {
    // console.log(req.params);
    let project_id = req.params.project_id;
    let sql = `SELECT * FROM project WHERE project_id = ${project_id} and is_deleted = 0`;
    connection.query(sql, (error, result) => {
      if (error) {
        res.status(400).json({ error });
      }
      res.status(200).json(result);
    });
  };

  // Eliminar un proyecto
  // localhost:4000/project/deleteProject/:project_id
  deleteProject = (req, res) => {
    let project_id = req.params.project_id;
    // console.log("id = " + project_id);
    let sql = `UPDATE project SET is_deleted = 1 WHERE project_id = "${project_id}"`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  // Cambiar usuario de un proyecto
  // localhost:4000/project/changeUser/:project_id/:user_id
  changeUser = (req, res) => {
    const { user_id, project_id } = req.params;

    let sql = `UPDATE project SET user_id='${user_id}' WHERE project_id = ${project_id}`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  //Mostrar informacion del Project_info
  //localhost:4000/project/:project_id/info
  getProjectInfo = (req, res) => {
    let project_id = req.params.project_id;
    let sql = `SELECT * FROM project_info WHERE project_id = ${project_id}`;
    connection.query(sql, (error, result) => {
      if (error) {
        res.status(400).json({ error });
        console.log(error);
      }
      res.status(200).json(result);
    });
  };

  // Mostrar los proyectos solo de los administradores
  // localhost:4000/project/onlyAdmin
  onlyAdmin = (req, res) => {
    let sql = `SELECT * FROM project WHERE user_id = 2`;
    connection.query(sql, (error, result) => {
      if(error) {
        res.status(400).json({error});
        console.log(error);
      }
      res.status(200).json(result);
    });
  }; 
};

module.exports = new projectControllers();
