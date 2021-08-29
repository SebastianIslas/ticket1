const Sequelize = require('sequelize');
const db = require('../../db/db.conexion');

const Presupuestos = db.define('presupuestos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_front: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    usuario: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'usuario'
        }
    },
    proyecto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    version: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mes_inicio: {
        type: Sequelize.INTEGER,
        allowNull: true,
        default: null
    },
    cant_meses: {
        type: Sequelize.INTEGER,
        allowNull: true,
        default: null
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