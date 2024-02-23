//conexion
const getDb = require('../../db/getDb');

//errores
const { invalidCredentialsError } = require("../../services/errorService");
    
const updateNoteModel = async (noteId,userId,wallId,title,text,labelId,status) =>{
    let connection;
    try{
        connection = await getDb();
        //Comprobamos que la nota pertenece al usuario.
        const [walls] = await connection.query(`
        SELECT id FROM walls WHERE userId=? AND id=?`,[userId,wallId]);

        if(walls.length<1) invalidCredentialsError();

        //Actualizamos la nota
        connection.query(`
        UPDATE notes SET title=?, text=?, labelId=?, status=?
        WHERE id=?
        `,[title,text,labelId,status, noteId])
        //Devolvemos la info para actualizar el estado en el front
        return {
            id: noteId,
            title,
            text,
            labelId,
            status,
        }
    }
    finally{
        if(connection)connection.release();
    }
}
module.exports = updateNoteModel;