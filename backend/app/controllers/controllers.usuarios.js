const { Usuarios } = require('../models/models.usuarios');
const jwt = require('jsonwebtoken')



module.exports.crearUsuario = async (usuario)=> {
    try {
        let resultado = await Usuarios.create({
            usuario: usuario.usuario,
            password: usuario.password
        })
        if (resultado) {
            return 'Usuario creado con extio'
        }else {
            
            throw new Error ('Error en la creacion del usuario o el usuario ya existe')
        }

    }catch (err) {
        console.log(err)
        throw new Error ('Error en la creacion del usuario')
    }
}

module.exports.iniciarSesion = async (usuario)=>{
    try {
        let resultado = await Usuarios.findOne({
            where: {usuario: usuario.usuario,
                    password: usuario.password
            }
        })
        if (resultado) {
            return resultado
        }else {
            throw new Error ('No existe el Usuario')
        }
    }catch (err) {
        console.log(err)
        throw new Error (err)
    }
}

module.exports.generaToken = async (data)=> {
    const resultado = jwt.sign({
        data} , process.env.SECRET_KEY 
    ) //Tiempo maximo 15 minutos de validez
    return resultado
}

module.exports.verificacionUsuario = async (token)=> {
    const resultado = jwt.verify(token, process.env.SECRET_KEY)

    if(resultado){
        return resultado
    }else {
        throw new Error ('Token no valido!')
    }
}