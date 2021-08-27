const bcrypt = require('bcrypt');
const { Usuarios } = require('../models/models.usuarios');

const crearUsuario = async (req,res)=> {
    try {
        let { usuario, password } = req.body;
        let passHas = await bcrypt.hash(password, 10);
        await Usuarios.create({
            usuario: usuario,
            password: passHas
        })
        res.status(400).json('Usuario creado con exito')
    }catch (err) {
        res.status(400).json('Datos invalidos o el usuario ya existe')
    }
}



module.exports = {
    crearUsuario,
}
