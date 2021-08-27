const express = require('express');
const app = express();

const midd = require('../middlewares/midd.usuarios')

const {
    crearUsuario
} = require('../controllers/controllers.usuarios')

app.post('/', crearUsuario);

module.exports = app;




