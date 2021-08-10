const Sequelize = require('sequelize');
const db = require('../db/db.conexion');

const Presupuestos = db.define('presupuestos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    id_front: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    proyecto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    version: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    mes_inicio: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cant_meses: {
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


module.exports = { Presupuestos }