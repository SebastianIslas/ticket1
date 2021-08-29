const { Presupuestos } = require('../models/models.presupuestos');
const { EstadoRes } = require('../models/models.estado_res');


const getEstadoResultados = async (req,res)=>{
    try {
        const idPresupuesto = req.params.idPresupuesto
        let id = await Presupuestos.findOne({
            where: { id_front: idPresupuesto }
        })
        const resultado = await EstadoRes.findAll({
            where: { id_presupuesto: id.id } 
        })
        res.status(200).json(resultado)
    }catch (err){
//        console.log(err)
    res.status(400).json('El id no existe')
}
}

const postEstadoResultados = async (req, res)=>{
    try {
        let idPresupuesto = req.params.idPresupuesto;
        let id = await Presupuestos.findOne({
            where: { id_front: idPresupuesto }
        })
        console.log(id)
        let { ventas, num_mes } = req.body;
        let resultado = await EstadoRes.create({
            id_presupuesto : id.id,
            ventas: ventas,
            num_mes: num_mes
        })

        res.status(200).json(resultado)
    }catch (err){
        console.log(err)
        res.status(400).json('El id ya existe')
    }
}

const putEstadoResultados = async (req, res)=>{
    try {
        let idPresupuesto = req.params.idPresupuesto;
        let id = await Presupuestos.findOne({
            where: { id_front: idPresupuesto }
        })
        //Vacia todos los datos actuales
        await EstadoRes.destroy({where: {id_presupuesto:id.id}})
        //Ordena los datos para el bulkCreate
        let datos = [];
        for (let key in req.body) {
            let estado_res = {
                'id_presupuesto' : id.id,
                'num_mes' : key,
                'ventas' : req.body[key]
            }
            datos.push(estado_res)
        }
        console.log(datos)
        await EstadoRes.bulkCreate(datos)
        res.status(200).json('Datos actualizados con exito')
    }catch (err){
        console.log(err)
        res.status(400).json('Error al actualizar los datos')
    }
}

const deleteEstadoResultados = async (req, res)=>{
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
    getEstadoResultados,
    postEstadoResultados,
    putEstadoResultados,
    deleteEstadoResultados
}