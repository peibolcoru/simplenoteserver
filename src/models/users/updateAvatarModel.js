const getDb = require("../../db/getDb");

const updateAvatarModel = async (userId, avatarName) => {
    let connection;
    try{
        connection = await getDb();

        await  connection.query(`
        UPDATE users 
        SET avatar=?
        WHERE id=?`,[avatarName,userId]);

    }finally{
        if(connection) connection.release();
    }
}

module.exports = updateAvatarModel;