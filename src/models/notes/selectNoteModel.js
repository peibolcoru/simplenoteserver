//conexion
const getDb = require("../../db/getDb");
//errores
const { unauthorizedUserError } = require("../../services/errorService");

const selectNoteModel = async (noteId,userId)=>{
    let connection;
    try{
        connection= await getDb();

        const [note] = await connection.query(`
        SELECT notes.*,labels.name as labelName FROM notes 
        INNER JOIN labels ON notes.labelId = labels.id 
        INNER JOIN walls ON notes.wallId = walls.id 
        WHERE notes.id = ? AND walls.userId = ?
        `,[noteId,userId]);
        
        if(note.length<1) unauthorizedUserError('note');

        return note;

    }finally{
        if(connection) connection.release();
    }

}

module.exports = selectNoteModel;