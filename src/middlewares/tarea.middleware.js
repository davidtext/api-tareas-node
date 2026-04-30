export const validarTarea = (req, res, next) => {
    const { titulo, descripcion } = req.body;
    if (!titulo) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
    next();
}