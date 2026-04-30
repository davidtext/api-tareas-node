//Traemos las herramientas o librerias que vamos a necesitar.
import pool from './db.js';
import express from 'express';
import router from './src/routes/tarea.routes.js';


// Inicializamos Express (framework para el servidor)
const app = express();
app.use(express.json());
app.use('/tareas', router);

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});