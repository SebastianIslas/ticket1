const { Sequelize, Deferrable }  = require('sequelize');
const db = require('../db/db.conexion');

const GastosAdministrativos = db.define('gastos_administrativos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_presupuesto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'presupuestos',
            key: 'id'
        }
    },
    concepto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    opc: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
    
}, {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});


module.exports = { GastosAdministrativos }