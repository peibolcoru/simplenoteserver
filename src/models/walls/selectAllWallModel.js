const getDb = require("../../db/getDb");
const { notFoundError } = require("../../services/errorService");

const selectAllWallModel = async (userId) => {
    let connection;
    try{

        connection= await getDb();
        const [walls] =await connection.query(`
        SELECT * FROM walls 
        WHERE userId=?`,[userId]);
        
        if(walls.length<1) { notFoundError('wall')};

        return walls

    }finally{
        if(connection) connection.release();
    }
}

module.exports = selectAllWallModel;