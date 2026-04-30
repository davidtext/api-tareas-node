import pool from '../../db.js';

export const obtenerTareasBD = async () => {
    const [resultado] = await pool.query('SELECT * FROM tareas');
    return resultado;
}

export const crearTareaBD = async (titulo, descripcion) => {
    const [resultado] = await pool.query(
        'INSERT INTO tareas (titulo, descripcion) VALUES (?, ?)',
         [titulo, descripcion]);
    return resultado;
}

export const actualizarTareaBD = async (id, estado) => {
    const [resultado] = await pool.query(
        'UPDATE tareas SET estado = ? WHERE id = ?',
        [estado, id]);
    return resultado;
}

export const eliminarTareaBD = async (id) => {
    const [resultado] = await pool.query(
        'DELETE FROM tareas WHERE id = ?',
        [id]);
    return resultado;
}