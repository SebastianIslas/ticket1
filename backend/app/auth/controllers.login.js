const { Usuarios } = require('../models/models.usuarios');
const { generarToken } = require('../services/service.JWT')
const bcrypt = require('bcrypt');



const iniciarSesion = async (req,res)=>{
    try {
        const { usuario, password } = req.body;
        const usuarioDb = await Usuarios.findOne({ where: { usuario } });
        const passwordDb = usuarioDb.dataValues.password;
        const valido = bcrypt.compareSync(password, passwordDb);
        if (!valido) {
            throw new Error ('Datos invalidos')
        }
        const token = await generarToken(usuario);
        console.log(token)
        res.status(200).json(token)
    }catch (err) {
        res.status(400).json(err.message)
    }
}




module.exports = {
    iniciarSesion
}