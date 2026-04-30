import express from 'express'
import {obtenerTareas, crearTarea, actualizarTarea, eliminarTarea} from '../controllers/tarea.controller.js'
import {validarTarea} from '../middlewares/tarea.middleware.js';


const router = express.Router();

router.get('/', obtenerTareas);
router.post('/', validarTarea, crearTarea);
router.put('/:id', actualizarTarea);
router.delete('/:id', eliminarTarea);

export default router; 