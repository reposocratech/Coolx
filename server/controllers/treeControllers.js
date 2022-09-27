const connection = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();



class treeController {


    //1 crear arbol
    //localhost:4000/tree/createTree

    createTree = (req, res) => {
        // const { tree_name, latin_name, avg_height_tree, avg_crown_area, avg_biomass, avg_age } = JSON.parse(
        //   req.body.register
        // );

        console.log("esto es el req.body del controlador", req.body);
        const { tree_name, latin_name, avg_height_tree, avg_crown_area, avg_biomass, avg_age} = req.body;
           
        let sql = `INSERT INTO tree (tree_name, latin_name, avg_height_tree, avg_crown_area, avg_biomass, avg_age) VALUES ( '${tree_name}',"${latin_name}", "${avg_height_tree}", "${avg_crown_area}", "${avg_biomass}", "${avg_age}")`;
    
             connection.query(sql, (error, result) => {
               console.log(error);
               error
                  ? res.status(400).json({ error })
                  : res.status(200).json(result);
             });
           
         
        }; 

    
    deleteTree = (req, res) => {
        let tree_id = req.params.tree_id;
        let sql = `UPDATE tree SET is_deleted = 1 WHERE tree_id = "${tree_id}"`;
        connection.query(sql, (error, result) =>{
            error ? res.status(400).json({ error }) : res.status(200).json(result);
        });
    };


        
        














}



module.exports = new treeController();
