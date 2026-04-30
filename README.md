# API REST - Gestor de Tareas 📝

Esta es una API RESTful construida con Node.js y Express para la gestión de tareas. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) conectándose a una base de datos MySQL.

Este proyecto fue desarrollado aplicando la arquitectura **MVC (Modelo-Vista-Controlador)** para mantener el código escalable y organizado.

## 🚀 Tecnologías Utilizadas
* **Backend:** Node.js, Express.js
* **Base de Datos:** MySQL (usando `mysql2/promise`)
* **Herramientas:** Nodemon, Thunder Client

## ⚙️ Características Técnicas
* **Arquitectura MVC:** Separación clara entre Rutas, Controladores y Modelos.
* **Middlewares:** Validación de datos de entrada (`req.body`) para proteger la base de datos.
* **Consultas Preparadas:** Uso de consultas SQL seguras para evitar inyecciones SQL.
* **Respuestas JSON:** Manejo de códigos de estado HTTP (200, 201, 400, 404, 500).

## 📌 Endpoints de la API

| Método | Ruta | Descripción | Body (JSON) |
|---|---|---|---|
| `GET` | `/tareas` | Obtiene todas las tareas | - |
| `POST` | `/tareas` | Crea una nueva tarea | `{ "titulo": "...", "descripcion": "..." }` |
| `PUT` | `/tareas/:id` | Actualiza el estado de una tarea | `{ "estado": "Completada" }` |
| `DELETE` | `/tareas/:id` | Elimina una tarea por su ID | - |