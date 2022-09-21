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
         
         
    // 2. User login
    // localhost:4000/users/login
    login = (req, res) => {

        let { email, password } = req.body;
        let sql = `SELECT * FROM user WHERE email = '${email}'`;
   
        connection.query(sql, (error, result) => {
        //en caso de error en la consulta
          if (error) return res.status(400).json(error);
   
        //en caso de no encontrar un user con dicho user_name o mail.
          if (!result || !result.length) {
            res.status(401).json("Usuario no registrado");
          } else {
           //en caso de que el mail o user_name sea correcto
           //aqui lo estamos haciendo con el mail
           console.log(result);
           const [user] = result;
          
           const hash = user.password;
   
            //capturo el user_id
            const user_id = user.user_id;
   
            //compramos contraseñas
            bcrypt.compare(password, hash, (error, response) => {
              if (error) throw error;
              //si las contraseñas coinciden
              if (response === true) {
                const token = jwt.sign(
                  {
                    user: {
                      email: user.email,
                      name: user.name,
                      id: user_id,
                      type: user.type
                   },
                  },
                  process.env.SECRET,
                  { expiresIn: "10d" }
                );
                res.status(200).json({ token });
              //si las contraseñas coinciden
              } else {
                res.status(401).json("Usuario y/o contraseña incorrectos");
              }
            });
          }
        });
     };
    

    //3 traer informacion de un usuario
    //localhost:4000/users/:user_id
    
    selectOneUser = (req, res) => {
      console.log( req.params.user_id , "EL ID");
      const user_id = req.params.user_id;
      console.log(req, "======")
    
      let sqlUser = `SELECT * FROM user WHERE user_id = ${user_id} and is_deleted = 0`;
        let sqlProject = `SELECT * FROM project WHERE user_id = ${user_id} and is_deleted = 0`;
        connection.query(sqlUser, (error, resultUser) => {
          if (error) {
            res.status(400).json({ error });
          }
          connection.query(sqlProject, (error2, resultProject) => {
            if (error2) {
              res.status(400).json({ error2 });
            }
            res.status(200).json({ resultUser, resultProject });
          });
        });
      };  




   

}

module.exports = new userController();