const express = require('express');
const app = express();

const { validarToken } = require('../services/service.JWT')
const {
    checkPostPresupuesto,
    checkPutPresupuesto
 } = require('../middlewares/midd.presupuestos')
const {
    getPresupuestos,
    datosPresupuesto,
    getDetallesPresupuesto,
    postPresupuesto,
    putPresupuesto,
    deletePresupuesto
 } = require('../controllers/controllers.presupuestos')

 //CRUD
 //Un solo presupuesto
app.get('/:idPresupuesto', validarToken, datosPresupuesto)
app.post('/', checkPostPresupuesto, validarToken, postPresupuesto);
app.put('/:idPresupuesto',checkPutPresupuesto, validarToken, putPresupuesto);
app.delete('/:idPresupuesto', validarToken, deletePresupuesto);



//Todos los presupuestos del usuario logeado
app.get('/', validarToken, getPresupuestos);

//Presupuestos de un usuario 
//app.get('/usuario/:idUsuario', validarToken, getPresupuestos)


//OBTIENE DETALLES DE UN PRESUPUESTO, TODAS LAS TABLAS
app.get('/:idPresupuesto/detalles', validarToken, getDetallesPresupuesto)



module.exports = app;

