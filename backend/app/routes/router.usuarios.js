const express = require('express');
const app = express();

const {
    crearUsuario
} = require('../controllers/controllers.usuarios')

app.post('/', crearUsuario);

module.exports = app;




