// Importamos las dependencias.
const mysql = require('mysql2/promise');
require('dotenv').config();
// Obtenemos las variables de entorno necesarias.
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB } = process.env;

// Variable que almacenará un "array" de conexiones.
let pool;

// Función que retorna una conexión libre con la base de datos.
const getDb = async () => {
    try {
        // Si la variable "pool" es undefined...
        if (!pool) {
            // Creamos una conexión con la base de datos.
            const db = await mysql.createConnection({
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASS,
                timezone: 'Z',
            });

            // Con la conexión anterior creamos la base de datos si no existe.
            db.query(`CREATE DATABASE IF NOT EXISTS ${MYSQL_DB}`);

            // Creamos un grupo de conexiones.
            pool = mysql.createPool({
                connectionLimit: 10,
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASS,
                database: MYSQL_DB,
                timezone: 'Z',
            });
        }

        // Retornamos una conexión libre con la base de datos.
        return await pool.getConnection();
    } catch (err) {
        console.error(err);
    }
};

// Exportamos la función anterior.
module.exports = getDb;
