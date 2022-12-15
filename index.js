const express = require ('express');
const routes = require('./routes');
// Creando el servidor
const app = express();

//Esto es para que carguen las rutas
app.use('/', routes())

// Puerto donde estara nuestro servidor
app.listen(5000);