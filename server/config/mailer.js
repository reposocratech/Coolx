const nodemailer = require('nodemailer');
const router = require('express').Router();


// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'coolx.earthproj@gmail.com', // user
      pass: 'zpbfimykotueqkas', // password
    },
  });

  transporter.verify().then(() => {
    console.log("Listo para enviar emails");
  });

module.exports = {transporter};