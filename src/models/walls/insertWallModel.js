const getDb = require ('../../db/getDb');

//errores
const { wallAlreadyRegisteredError } = require('../../services/errorService');

const insertWallModel = async (userId,titleWall)=>{
    let connection;
    try{
        connection = await getDb();
        
        //Comprobamos que no exista un wall con ese nombre
        const [wall] = await connection.query(`
            SELECT id 
            FROM walls 
            WHERE title=? AND userId=?`,[titleWall,userId]);  
            
        if(wall.length>0) wallAlreadyRegisteredError();
        
        //Grabamos el wall
        await connection.query(`INSERT INTO walls (userId,title) VALUES (?,?)`,[userId,titleWall]);
        
    }finally{
        if(connection) connection.release();
    }

}
module.exports = insertWallModel;