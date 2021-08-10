const midd = require('../middlewares/midd.usuarios')
const usuariosController = require('../controllers/controllers.usuarios')
const cors = require('cors')
const express = require('express');
const router = express.Router();


    router.post('/', async (req,res)=>{
        let usuario = req.body
        console.log(usuario)
        try {
            let resultado = await usuariosController.iniciarSesion(usuario)
            if (resultado) {
                let validacion = await usuariosController.generaToken(usuario)
                res.json(validacion)
            } else{
                res.status(400).send('Usuario invalido')
            }
        }catch (err){
            res.status(400).send('Usuario invalido')
        }
    })

    router.post('/nuevoUsuario', async (req,res)=>{
        try{
            let usuario = req.body
            let resultado = await usuariosController.crearUsuario(usuario)
            res.status(200).json(resultado)

        }catch(error){
            console.log(error)
            res.status(400).json("Error al crear el usuario")  
        }
    })

    module.exports = router;