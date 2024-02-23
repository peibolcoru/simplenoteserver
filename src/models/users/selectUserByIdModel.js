
const getDb = require("../../db/getDb");

const { notFoundError } = require("../../services/errorService");

const selectUserByIdModel = async (userId) =>{
    let connection;
    
    try{

        connection= await getDb();
        [users] = await connection.query(`
            SELECT id,name,email,avatar FROM users WHERE id=?`,[userId]); 
        
        // Si no tiene avatar devolvemos un error.
        if(users.length<1) notFoundError('user');
        
        return users[0]

    }finally{
        if(connection) connection.release();
    }

    
}
module.exports = selectUserByIdModel;