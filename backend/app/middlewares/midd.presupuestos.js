const { postPresupuesto, putPresupuesto } = require('../dto/presupuestos.dto');
const Joi = require('joi');

const checkPostPresupuesto = async (req, res, next) =>{
    try {            
        Joi.attempt(req.body, postPresupuesto, 'Los datos enviados no son correctos');
        next();
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const checkPutPresupuesto = async (req, res, next) =>{
    try {            
        Joi.attempt(req.body, putPresupuesto, 'Los datos enviados no son correctos');
        next();
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = { 
    checkPostPresupuesto,
    checkPutPresupuesto
}