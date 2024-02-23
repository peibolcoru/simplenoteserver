//Importamos la conexion
const getDb = require("../../db/getDb");

//errores
const { invalidCredentialsError } = require("../../services/errorService");

const insertNoteModel = async (userId,wallId,title,text,labelId,status,image,file)=>{
    let connection;
    try{
        connection = await getDb();

        //Comprobamos que ese muro pertenece al usuario
        const [walls] = await connection.query(`
        SELECT id FROM walls WHERE userId=? AND id=?`,[userId,wallId]);

        if(walls.length<1) invalidCredentialsError();
        
        //Insertamos la nota
        const [note] = await connection.query(`
            INSERT INTO notes(wallId,title,text,labelId,status,image,file) VALUES(?,?,?,?,?,?,?)
            `,[wallId,title,text,labelId,status,image,file]);

        //Retornamos el id de la nota que acabmos de insertar que luego necesitamos para actulizar el State en Front
        return {
                noteId:note.insertId,
                wallId,
                title,
                text,
                labelId,
                image: image || null,
                file: file || null
                }

    }finally{
        if(connection)connection.release();
    }
}
module.exports = insertNoteModel;