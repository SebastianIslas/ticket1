const { Presupuestos } = require('../models/models.presupuestos');
const { Flujo } = require('../models/models.flujo');


const getTablaFlujo = async (req,res)=>{
    try {
        const idPresupuesto = req.params.idPresupuesto
        let id = await Presupuestos.findOne({
            where: { id_front: idPresupuesto }
        })
        const resultado = await Flujo.findAll({
            where: { id_presupuesto: id.id } 
        })
        res.status(200).json(resultado)
    }catch (err){
//        console.log(err)
        res.status(400).json('El id no existe')
    }
}

const postPresupuestoFlujo = async (req, res)=>{
    try {
        let idPresupuesto = req.params.idPresupuesto;
        let id = await Presupuestos.findOne({
            where: { id_front: idPresupuesto }
        })
        let { ingresos, num_mes } = req.body;
        console.log(id.id);
        console.log(req.body);
        let resultado = await Flujo.create({
            id_presupuesto : id.id,
            ingresos: ingresos,
            num_mes: num_mes
        })

        res.status(200).json(resultado)
    }catch (err){
        console.log(err)
        res.status(400).json('El id ya existe')
    }
}

const putPresupuestoFlujo = async (req, res)=>{
    try {
        let idPresupuesto = req.params.idPresupuesto;
        let id = await Presupuestos.findOne({
            where: { id_front: idPresupuesto }
        })
        //Vacia todos los datos actuales
        await Flujo.destroy({where: {id_presupuesto:id.id}})
        //Ordena los datos para el bulkCreate
        let datos = [];
        console.log("SSSSSSSSSSSSSSSSSSSSSSSS")
        console.log(req.body)
        for (let key in req.body) {
            let ingreso = {
                'id_presupuesto' : id.id,
                'num_mes' : key,
                'ingresos' : req.body[key]
            }
            datos.push(ingreso)
        }
        console.log(datos)
        await Flujo.bulkCreate(datos)

        res.status(200).json('Datos actualizados con exito')
    }catch (err){
        console.log(err)
        res.status(400).json('Error al actualizar los datos')
    }
}

const deletePresupuestoFlujo = async (req, res)=>{
    try {
        let idPresupuesto = req.params.idPresupuesto;
        let id = await Presupuestos.findOne({
            where: { id_front: idPresupuesto }
        })
        let { num_mes } = req.body;
        console.log(num_mes)
        console.log(id.id)
        await Flujo.destroy({
            where: {num_mes: num_mes, id_presupuesto: id.id }
        })

        res.status(200).json('Ingreso eliminado con exito')
    }catch (err){
        console.log(err)
        res.status(400).json('El id ya existe')
    }
}

module.exports = {
    getTablaFlujo,
    postPresupuestoFlujo,
    putPresupuestoFlujo,
    deletePresupuestoFlujo
}