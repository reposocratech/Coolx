var express = require('express');
const userControllers = require("../controllers/userControllers");
var router = express.Router();
const multer = require("../middleware/multer");
const multerSingle = require("../middleware/multerSingle");
const verify = require("../middleware/verify");



//1 createUser
//localhost:4000/users/registrocoolx
router.post("registrocoolx", userControllers.createUser);

// 2. User login
// localhost:4000/users/login
router.post("/login", userControllers.login);

//3 Trae infromación de un usuario
//localhost:40000/users/oneUser/:user_id
router.get("/oneUser/:user_id", userControllers.selectOneUser);

//4. Editar un usuario
//localhost:40000/users/editUser/:userId
router.get("/editUser/:user_id", userControllers.editUser);




module.exports = router;













