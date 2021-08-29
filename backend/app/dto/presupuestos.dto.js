const Joi = require('joi');

module.exports.postPresupuesto = Joi.object().keys({
    proyecto: Joi.string().min(4).max(255).required(),
    version: Joi.string().min(1).max(50).required(),
    id_front: Joi.string().min(1).max(50).required(),
})

module.exports.putPresupuesto = Joi.object().keys({
    proyecto: Joi.string().min(4).max(255).required(),
    version: Joi.string().min(1).max(50).required(),
    mes_inicio: Joi.number().integer().min(0).max(11).required(),
    cant_meses: Joi.number().integer().min(1).required(),
})

