const { Presupuestos } = require('../models/models.presupuestos');


const getPresupuestos = async (req,res)=>{
    try {
        const usuario = req.usuario
        const resultado = await Presupuestos.findAll({
            where: { usuario: usuario } 
        })
        res.status(200).json(resultado)
    }catch (err){
//        console.log(err)
        res.status(400).json("err.message")
    }
}

const datosPresupuesto = async (req,res)=>{
    try {
        let idPresupuesto = req.params.idPresupuesto
        let resultado = await Presupuestos.findAll({
            where: { id_front: idPresupuesto } 
        })
        if (resultado[0])
            res.status(200).json(resultado)
        else
            throw new Error('El presupuesto no existe')
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

const postPresupuesto = async (req, res)=>{
    try {
        let { id_front, proyecto, version } = req.body;
        console.log(version)
        let resultado = await Presupuestos.create({
            usuario : req.usuario,
            id_front: id_front,
            proyecto : proyecto,
            version: version
        })
        res.status(200).json(resultado)
    }catch (err){
        console.log(err)
        res.status(400).json('El id ya existe')
    }
}

const putPresupuesto = async (req, res)=>{
    let idPresupuesto = req.params.idPresupuesto
    let { proyecto, version, mes_inicio, cant_meses } = req.body;
    try {
        let resultado = await Presupuestos.update({
            proyecto: proyecto,
            version: version,
            mes_inicio: mes_inicio,
            cant_meses: cant_meses,
        },{ 
            where: { id_front: idPresupuesto }
        })
        if (resultado[0])
            res.status(200).json(`Proyecto con id ${idPresupuesto} actualizado con exito`)
        else
            throw new Error('El presupuesto no existe')
    }catch (err){
        console.log(err)
        res.status(400).json(err.message)
    }
}

const deletePresupuesto = async (req, res)=>{
    let idPresupuesto = req.params.idPresupuesto
    try {
        let resultado = await Presupuestos.destroy({
            where: { id_front: idPresupuesto } 
        })
        if (resultado)
            res.status(200).json('Presupuesto eliminado con exito')
        else
            throw new Error('El presupuesto no existe')
    }catch (err){
        console.log(err)
        res.status(400).json(err.message)
    }
}

module.exports = {
    getPresupuestos,
    datosPresupuesto,
    getDetallesPresupuesto,
    postPresupuesto,
    putPresupuesto,
    deletePresupuesto
}