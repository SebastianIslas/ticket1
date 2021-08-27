const { Presupuestos } = require('../models/models.presupuestos');


const getPresupuestos = async (req,res)=>{
    console.log(req.params.idUsuario)
    if(req.params.idUsuario)
        usuario = req.params.idUsuario
    else
        usuario = req.usuario
    try {
        let resultado = await Presupuestos.findAll({
            where: { usuario } 
        })
        res.status(200).json(resultado)
    }catch (err){
//        console.log(err)
        res.status(400).json(err.message)
    }
}

const datosPresupuesto = async (req,res)=>{
    try {
        let idPresupuesto = req.params.idPresupuesto
        let resultado = await Presupuestos.findAll({
            where: { id_front: idPresupuesto } 
        })
        res.status(200).json(resultado)
    }catch (err){
        console.log(err)
        res.status(400).json(err.message)
    }
}

const getDetallesPresupuesto = async (req, res)=>{
    let idPresupuesto = req.params.idPresupuesto
    try {
        let resultado = await Presupuestos.findAll({
            where: { id_front: idPresupuesto } 
        })
        res.status(200).json(resultado)
    }catch (err){
        console.log(err)
        res.status(400).json(err.message)
    }
}

module.exports = {
    getPresupuestos,
    datosPresupuesto,
    getDetallesPresupuesto
}