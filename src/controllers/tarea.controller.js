import { obtenerTareasBD, crearTareaBD, actualizarTareaBD, eliminarTareaBD } from '../models/tarea.model.js'


export const obtenerTareas = async (req, res) => {
    try {
        const tareas = await obtenerTareasBD();
        res.status(200).json(tareas);
    } catch (error) {
        res.status(500).json({ error: 'Error interno al obtener las tareas' });
    }
}

export const crearTarea = async (req, res) => {
    const { titulo, descripcion } = req.body;
    try {
        const resultado = await crearTareaBD(titulo, descripcion);
        res.status(201).json({ mensaje: 'Tarea creada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la tarea' });
    }
}

//El if fuera del try se hace cuando tenes "id" en caso de update aparentemente
export const actualizarTarea = async (req, res) => {
    const { id } = req.params;
    const { estado } = req.body;
    if (!estado) {
        return res.status(400).json({ error: 'El estado es obligatorio' });
    }
    try {
        const resultado = await actualizarTareaBD(id, estado);
        if (resultado.affectedRows === 0) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.status(200).json({ mensaje: 'Tarea actualizada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la tarea' });
    }
}

export const eliminarTarea = async (req, res) => {
    const { id } = req.params;
    try {
        const resultado = await eliminarTareaBD(id);
        if (resultado.affectedRows === 0) {
            return res.status(404).json({ error: 'No se pudo eliminar la tarea' });
        }
        res.status(200).json({ mensaje: 'Tarea borrada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la tarea' });
    }
}