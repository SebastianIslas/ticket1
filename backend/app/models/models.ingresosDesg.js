const { Sequelize, Deferrable }  = require('sequelize');
const db = require('../db/db.conexion');

const IngresosDesg = db.define('ingresos_desgloce', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_ingreso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'ingresos',
            key: 'id'
        }
    },
    id_mes: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'meses',
            key: 'id'
        }

    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    
}, {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});


module.exports = { IngresosDesg }