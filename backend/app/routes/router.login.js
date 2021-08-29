const express = require('express');
const app = express();
const { checkLogin } = require('../auth/midd.login');
const { 
    iniciarSesion
 }= require('../auth/controllers.login')

app.post('/', checkLogin, iniciarSesion);

module.exports = app;