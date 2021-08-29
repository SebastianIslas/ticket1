const express = require('express');
const app = express();

app.use('/login', require('./router.login'));
app.use('/presupuestos', require('./router.presupuestos'));
app.use('/presupuestos', require('./router.tablas'));
app.use('/usuario', require('./router.usuarios'));

module.exports = app;