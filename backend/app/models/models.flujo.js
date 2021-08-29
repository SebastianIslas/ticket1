const { Sequelize }  = require('sequelize');
const db = require('../../db/db.conexion');

const Flujo = db.define('flujo_efectivo', {
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
    num_mes: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    ingresos: {
        type: Sequelize.FLOAT,
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


module.exports = { Flujo }