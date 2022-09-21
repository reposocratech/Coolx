const connection = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class adminControllers {

    // Admin
    // localhost:4000/admin/:adminId
    showPanel = (req, res) => {

    }

}

module.exports = new adminControllers();