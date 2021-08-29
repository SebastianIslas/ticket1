const {
    validarIngreso, 
    validarIngresoDelete
} = require('../dto/tablas.dto');
const Joi = require('joi');

const checkIngresoPost = async (req, res, next) => {
    try{
        await Joi.attempt(req.body, validarIngreso, 'Los datos enviados no son correctos');
        return next();
    } catch (err) {
        res.status(500).json(err);
    }
}

const checkIngresosPut = async (req, res, next) =>{
    try {
        for (let key in req.body) {
            let ingreso = {
                num_mes: key,
                ingresos: req.body[key],
            }
            console.log(ingreso)
            Joi.attempt(ingreso , validarIngreso, 'Los datos enviados no son correctos');    
        }
        next();
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const checkIngresoDelete = async (req, res, next) => {
    try{
        await Joi.attempt(req.body, validarIngresoDelete, 'Los datos enviados no son correctos');
        return next();
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = { 
    checkIngresosPut,
    checkIngresoPost,
    checkIngresoDelete
}