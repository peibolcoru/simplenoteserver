//conexion
const getDb = require("../../db/getDb");
//errores
const { unauthorizedUserError } = require("../../services/errorService");

const deleteNoteModel = async (noteId,userId)=>{
    let connection;
    try{
        connection= await getDb();
        const [note] = await connection.query(`
        SELECT notes.id FROM notes 
        INNER JOIN walls ON notes.wallId = walls.id
        WHERE notes.id = ? AND walls.userId = ?
        `,[noteId,userId]);
        
        if(note.length<1) unauthorizedUserError('note');

        await connection.query(`
        DELETE FROM notes WHERE id = ?
        `,[noteId]);
        
    }finally{
        if(connection) connection.release();
    }

}

module.exports = deleteNoteModel;