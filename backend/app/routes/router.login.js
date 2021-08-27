const midd = require('../middlewares/midd.usuarios')
const express = require('express');
const app = express();

const { 
    iniciarSesion
 }= require('../auth/controllers.login')

app.post('/', iniciarSesion);

module.exports = app;