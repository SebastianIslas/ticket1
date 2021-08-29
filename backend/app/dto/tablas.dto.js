const Joi = require('joi');

module.exports.validarIngreso = Joi.object().keys({
    num_mes: Joi.number().integer().min(0).required(),
    ingresos: Joi.number().min(0).required()
}).unknown(true);

module.exports.validarIngresoDelete = Joi.object().keys({
    num_mes: Joi.number().integer().min(0).required(),
});