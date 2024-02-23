const getDb = require("../../db/getDb");
const { unauthorizedUserError } = require("../../services/errorService");


const deleteWallModel = async (wallId,userId) => {
    let connection
    try{
        connection = await getDb();
        
        //Comprobamos que exista el muro de ese usuario
        const [walls] = await connection.query(`
            SELECT id FROM walls 
            WHERE userId=? AND id=?`,[userId,wallId]);
        
        if(walls.length<1) unauthorizedUserError();

        // Borramos el muro
        await connection.query(`
            DELETE FROM walls 
            WHERE id = ? AND userId = ?`, [wallId, userId]);

    }finally{
        if(connection) connection.release();
    }
}

module.exports = deleteWallModel;