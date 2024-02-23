//Conexion
const getDb = require('../../db/getDb');

// Errores
const { invalidCredentialsError } = require('../../services/errorService');

//Funcion que conecta con la BD para busacr mail
const selectUserByEmailModel = async (email)=>{
let connection;
try{
    connection = await getDb();
    const [users]=await connection.query(`
    SELECT id, name , password
    FROM users
    WHERE email=?`,[email]);

    if(users.length < 1) {
        invalidCredentialsError()
    }

    //Solo retornamos el array 0  ya que solo habrá un usuario
    return users[0];
}finally{
    if(connection) connection.release();
}
}

module.exports = selectUserByEmailModel;