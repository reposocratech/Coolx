const connection = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


class userController {

    //1.Crear usuario
    //localhost:4000/users/createUser

    createUser = (req, res) => {
        // const { user_name, passwrod, type, surname, company, nif, position, phone, email, country, currency, create date, last mod date, last connection } = JSON.parse(
        //   req.body.register
        // );
        console.log("esto es el req.body del controlador", req.body);
        const { user_name, email, password, surname, company, nif, phone  } = req.body;
           
        let saltRounds = 8;
         bcrypt.genSalt(saltRounds, function (err, saltRounds) {
         bcrypt.hash(password, saltRounds, function (err, hash) {
             let sql = `INSERT INTO user (user_name, password, type, surname, company, nif, position, phone, email, currency, create_date, last_mod_date, last_connection) VALUES ( '${user_name}',"${surname}", "${company}", "${nif}", "${phone} '${email}', '${hash}')`;
    
             connection.query(sql, (error, result) => {
               console.log(error);
               error
                  ? res.status(400).json({ error })
                  : res.status(200).json(result);
             });
           });
         });
      };





}