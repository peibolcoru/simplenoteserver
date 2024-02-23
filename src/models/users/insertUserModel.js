// Importamos las dependencias
const bcrypt= require('bcrypt');

// Conexion con DB
const getDb = require('../../db/getDb');
const { emailAlreadyRegisteredError, userAlreadyRegisteredError } = require('../../services/errorService');

const insertUserModel = async (username,email,password)=>{
let connection;
try {
    connection= await getDb();

// Buscamos en la bd si existe el usuario con ese mail
    let [users] = await connection.query(`
    SELECT id FROM users 
    WHERE email = ?
    `,[email]);

    if(users.length>0){
        emailAlreadyRegisteredError();
    }

    [users] = await connection.query(`
    SELECT id FROM users 
    WHERE  name = ?
    `,[username]);

// Buscamos en la Bd si hay un usuario con ese nombre
    if(users.length>0){
        userAlreadyRegisteredError();
    }

// Encriptado de la contraseña
const hashedPass = await bcrypt.hash(password,10);

//Creamos el usuario

await connection.query(`
    INSERT INTO users(name,email,password)
    VALUES(?,?,?)`,
    [username,email,hashedPass]);



} finally{
    if(connection) connection.release();
}
}

module.exports = insertUserModel;