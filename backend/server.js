const express = require('express');
const app = express();
require('dotenv').config();

const sequelize = require('./app/db/db.conexion');
const cors = require('cors');

//Configuraciones globales
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use(cors());



//Services
const { corsOption } = require('./app/middlewares/midd.index');

//iniciamos servidor
async function inicioServer() {
    try {
        await sequelize.authenticate();
        console.log('Conección estabilizada correctamente');
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en htt://${process.env.HOST}:${process.env.PORT}`);
        });
    
    } catch (error) {
        console.error('No se pudo conectar correctamebte con la Base de datos:', error);
     }
}

inicioServer();

//ROUTES
app.use('/login', require('./app/routes/route.login'));
app.use('/presupuestos', require('./app/routes/route.presupuestos'));
