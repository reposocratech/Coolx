const connection = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class userController {

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

}

module.exports = new userController();