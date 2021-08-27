
const { CostosDirectos } = require('../models/models.costos_direct');
const { CostosDirectDesg } = require('../models/models.costosDirectDesg');
const { EstadoRes } = require('../models/models.estadoRes');
const { Flujo } = require('../models/models.flujo');
const { GastosAdministrativosDesg } = require('../models/models.gastosAdministrativosDesg');
const { GastosAdministrativos } = require('../models/models.gastosAdministrativos');
const { Ingresos } = require('../models/models.ingresos');
const { IngresosDesg } = require('../models/models.ingresosDesg');
const { Meses } = require('../models/models.meses');
const { Presupuestos } = require('../models/models.presupuestos');
const { Recursos } = require('../models/models.recursos');
const { RecursosDesg } = require('../models/models.recursosDesg');
const { Usuarios } = require('../models/models.usuarios');


Usuarios.sync().then( () => {
    console.log("Tabla usuarios creada");
})

Amistad.sync().then(() => {
    console.log('Tabla Amistad creada');
})

Solicitud.sync().then(() => {
    console.log('Tabla Solicitud creada');
})



Habilidades.sync().then( () => {
    console.log("Tabla habilidades creada");
})

Opiniones.sync().then( () => {
    console.log("Tabla opiniones creada");
})

Proyectos.sync().then( () => {
    console.log("Tabla proyectos creada");
})

Validaciones.sync().then( () => {
    console.log("Tabla validaciones creada");
})
