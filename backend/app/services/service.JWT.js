const jwt = require('jsonwebtoken')

const generarToken = async (usuario)=> {
    const payload = { usuario };
    const resultado = jwt.sign(payload , process.env.SECRET_KEY,{
            expiresIn: '99h'
        }
    )
    return resultado
}

const validarToken = async (req, res, next)=> {
    try {
        if (req.headers.authorization != undefined){
            const token = req.headers.authorization.split(' ')[1]
            const resultado = jwt.verify(token, process.env.SECRET_KEY)
            req.usuario = resultado.usuario
            return next()
        }else{
            throw new Error ('Requieres autorización')
        }
    }catch (err){
        console.log(err.message)
        res.status(400).json({error: err.message})
    }
}

module.exports = {
    generarToken,
    validarToken
}