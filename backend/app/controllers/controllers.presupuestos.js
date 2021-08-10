//Importo los modulos necesarios
const { Presupuestos } = require('../models/models.presupuestos');


//Exporto los modulos de trabajo

module.exports.getPresupuestos = async (usuario)=>{
    console.log(usuario);
    try {
        let resultado = await Presupuestos.findAll({
            where: { usuario: usuario } 
        })
        return resultado
    }catch (err){
        console.log(err)
        throw new Error ('Ocurrio un error en la consulta')
    }
}

module.exports.getPresupuesto = async (idPresupuesto)=>{
    console.log(idPresupuesto);
    try {
        let resultado = await Presupuestos.findAll({
            where: { id_front: idPresupuesto } 
        })
        return resultado
    }catch (err){
        console.log(err)
        throw new Error ('Ocurrio un error en la consulta')
    }
}

module.exports.getTablasPresupuesto = async (idPresupuesto)=>{
    console.log(idPresupuesto);
    try {
        let resultado = await Presupuestos.findAll({
            where: { id_front: idPresupuesto } 
        })
        return resultado
    }catch (err){
        console.log(err)
        throw new Error ('Ocurrio un error en la consulta')
    }
}
