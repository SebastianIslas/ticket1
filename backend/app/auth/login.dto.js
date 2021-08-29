const Joi = require('joi');

module.exports.login = Joi.object().keys({
    usuario: Joi.string().min(1).max(255).required(),
    password: Joi.string().min(1).max(50).required(),
})