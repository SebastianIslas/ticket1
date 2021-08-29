const express = require('express');
const app = express();

const { validarToken } = require('../services/service.JWT')

const {
    checkIngresoPost,
    checkIngresosPut,
    checkIngresoDelete

 } = require('../middlewares/midd.tablas')



const {
    getTablaFlujo,
    postPresupuestoFlujo,
    putPresupuestoFlujo,
    deletePresupuestoFlujo
 } = require('../controllers/controllers.flujoEfectivo')

 const {
    getEstadoResultados,
    postEstadoResultados,
    putEstadoResultados,
    deleteEstadoResultados
 } = require('../controllers/controllers.estadoResultados')

 //TABLA FLUJO EFECTIVO
app.get('/:idPresupuesto/flujo', validarToken, getTablaFlujo);
//Crea solo un registro
app.post('/:idPresupuesto/flujo',  checkIngresoPost, postPresupuestoFlujo);
//Actualiza todos los registros o los crea si no existen
app.put('/:idPresupuesto/flujo', checkIngresosPut, validarToken, putPresupuestoFlujo);
app.delete('/:idPresupuesto/flujo', checkIngresoDelete, validarToken, deletePresupuestoFlujo);

//TABLA ESTADO RESULTADOS
app.get('/:idPresupuesto/estRes', validarToken, getEstadoResultados);
//Crea solo un registro
app.post('/:idPresupuesto/estRes', postEstadoResultados);
//Actualiza todos los registros o los crea si no existen
app.put('/:idPresupuesto/estRes', validarToken, putEstadoResultados);
app.delete('/:idPresupuesto/estRes', checkIngresoDelete, validarToken, deleteEstadoResultados);
 
 



module.exports = app;

