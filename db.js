//hacemos un import trayendo la herramienta para trabajar con mysql y tiene que ser con /promise porque de esa manera nos permite usar el async/await
import mysql from 'mysql2/promise'

//Aca creamos "pool" y le asignamos la variable creada mysql y llamamos a la variable (herramienta) predefinida ".createPool" para que haga la funcion de conectarse a la BD
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestor_tareas'
});

//Exportamos usando default ya que no necesitariamos usar llaves {} y ya que no tenemos mas cosas que exportar
export default pool;
//("default" lo usamos cuando tenemos una sola funcion y lo exportamos asi "import pool from '/db.js';" 
// y "const" cuando tenemos varias y lo llamamos asi "import {cear, borrar} from '/usuarios.js'")


//la terminal se abre con CTRL+Ñ