const { login } = require('./login.dto');
const Joi = require('joi');

const checkLogin = async (req, res, next) =>{
    try {            
        Joi.attempt(req.body, login, 'Los datos enviados no son correctos');
        next();
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = { 
    checkLogin
}