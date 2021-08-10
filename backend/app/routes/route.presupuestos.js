const midd = require('../middlewares/midd.usuarios')
const presupuestosController = require('../controllers/controllers.presupuestos')
const cors = require('cors')
const express = require('express');
const router = express.Router();



//Presupuestos del usuario logeado
router.get('/usuario', midd.usuarioValido, async (req,res)=>{
    usuario = req.params.usuario.usuario;
    try {
        let resultado = await presupuestosController.getPresupuestos(usuario)
        res.json(resultado)
    }catch (err){
        console.log(err)
        res.status(400).send('Ocurrio un error inesperado')
    }
})


//Presupuestos de un usuario
router.get('/usuario/:idUsuario', midd.usuarioValido, async (req,res)=>{
    usuario = req.params.idUsuario;
    try {
        let resultado = await presupuestosController.getPresupuestos(usuario)
        res.json(resultado)
    }catch (err){
        console.log(err)
        res.status(400).send('Ocurrio un error inesperado')
    }
})

//Datos de un presupuesto
router.get('/:idPresupuesto', midd.usuarioValido, async (req,res)=>{
    let id_presupuesto = req.params.idPresupuesto; //Id del front
    console.log(id_presupuesto)
    try {
        let resultado = await presupuestosController.getPresupuesto(id_presupuesto)
        res.json(resultado)
    }catch (err){
        console.log(err)
        res.status(400).send('Ocurrio un error inesperado')
    }
})


//OBTIENE DATOS DE UN PROYECTO
router.get('/:idPresupuesto/tablas', midd.usuarioValido, async (req,res)=>{
    console.log("entssro")
    let id_presupuesto = req.params.idPresupuesto; //Id del front
    try {
        let resultado = await presupuestosController.getTablasPresupuesto(id_presupuesto)
        res.json(resultado)
    }catch (err){
        console.log(err)
        res.status(400).send('Ocurrio un error inesperado')
    }
})



module.exports = router;