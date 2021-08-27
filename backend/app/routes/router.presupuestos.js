const express = require('express');
const app = express();

const { validarToken } = require('../services/service.JWT')
const {
    getPresupuestos,
    datosPresupuesto,
    getDetallesPresupuesto
 } = require('../controllers/controllers.presupuestos')



//Presupuestos del usuario logeado
app.get('/usuario', validarToken, getPresupuestos);

//Presupuestos de un usuario
app.get('/usuario/:idUsuario', validarToken, getPresupuestos)

//Datos de un presupuesto
app.get('/:idPresupuesto', validarToken, datosPresupuesto)


//OBTIENE DETALLES DE UN PRESUPUESTO
app.get('/:idPresupuesto/detalles', validarToken, getDetallesPresupuesto)


module.exports = app;

