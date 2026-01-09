require('dotenv').config();
const express = require('express');
const path = require('path');

const apiRoutes = require('./api');

const app = express();
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';

/* Middlewares */
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

/* Logger */
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

/* API */
app.use('/api', apiRoutes);

/* Start */
app.listen(PORT, () => {
  console.log('===================================');
  console.log('🌽 Guaramo 2.0');
  console.log(`🚀 Servidor escuchando en puerto ${PORT}`);
  console.log(`🧠 Entorno: ${ENV}`);
  console.log('===================================');
});
