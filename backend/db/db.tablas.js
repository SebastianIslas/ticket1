const { Usuarios } = require('../app/models/models.usuarios');
const { Presupuestos } = require('../app/models/models.presupuestos');
const { Meses } = require('../app/models/models.meses');
const { CostosDirectos } = require('../app/models/models.costos_direct');
const { CostosDirectDesg } = require('../app/models/models.costos_directDesg');
const { EstadoRes } = require('../app/models/models.estado_res');
const { Flujo } = require('../app/models/models.flujo');
const { GastosAdministrativosDesg } = require('../app/models/models.gasto_admDesg');
const { GastosAdministrativos } = require('../app/models/models.gastos_adm');
const { Ingresos } = require('../app/models/models.ingresos');
const { IngresosDesg } = require('../app/models/models.ingresosDesg');
const { Recursos } = require('../app/models/models.recursos');
const { RecursosDesg } = require('../app/models/models.recursosDesg');


// nodemon .\db\db.tablas.js  


Usuarios.sync().then( () => {
    console.log("Tabla Usuarios creada");
})

Presupuestos.sync().then( () => {
    console.log("Tabla Presupuestos creada");
})

Meses.sync().then( () => {
    console.log("Tabla Meses creada");
})

CostosDirectos.sync().then( () => {
    console.log("Tabla CostosDirectos creada");
})

CostosDirectDesg.sync().then(() => {
    console.log('Tabla CostosDirectDesg creada');
})

EstadoRes.sync().then(() => {
    console.log('Tabla EstadoRes creada');
})

Flujo.sync().then( () => {
    console.log("Tabla Flujo creada");
})

GastosAdministrativos.sync().then( () => {
    console.log("Tabla GastosAdministrativos creada");
})

GastosAdministrativosDesg.sync().then( () => {
    console.log("Tabla GastosAdministrativosDesg creada");
})

Ingresos.sync().then( () => {
    console.log("Tabla Ingresos creada");
})


IngresosDesg.sync().then( () => {
    console.log("Tabla IngresosDesg creada");
})

Recursos.sync().then( () => {
    console.log("Tabla Recursos creada");
})

RecursosDesg.sync().then( () => {
    console.log("Tabla RecursosDesg creada");
})


