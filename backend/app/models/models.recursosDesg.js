const { Sequelize }  = require('sequelize');
const db = require('../../db/db.conexion');

const RecursosDesg = db.define('recursos_desgloce', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_recurso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'recursos',
            key: 'id'
        }
    },
    num_mes: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    porcentaje_asignado: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    costo_func_porcentaje_asignado: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    costo_por_porcentaje: {
        type: Sequelize.INTEGER,
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


module.exports = { RecursosDesg }