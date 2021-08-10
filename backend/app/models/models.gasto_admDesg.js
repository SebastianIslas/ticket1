const { Sequelize, Deferrable }  = require('sequelize');
const db = require('../db/db.conexion');

const GastosAdministrativosDesg = db.define('gastos_administrativos_desgloce', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_gasto_adm: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'gastos_administrativos',
            key: 'id'
        }
    },
    id_mes: {
        type: Sequelize.INTEGER,
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


module.exports = { GastosAdministrativosDesg }