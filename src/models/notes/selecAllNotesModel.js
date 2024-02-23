//Conexion a la base de datos
const getDb = require("../../db/getDb");

//Errores
const { notFoundError } = require("../../services/errorService");

const selecAllNotesModel = async (wallId,userId,keyword='')=>{
    let connection;
    try{
        connection = await getDb();

        const [note] = await connection.query(`
        SELECT notes.*,labels.name as labelName FROM notes 
        INNER JOIN labels ON notes.labelId = labels.id 
        INNER JOIN walls ON notes.wallId = walls.id 
        WHERE notes.wallId= ? AND walls.userId = ? AND (notes.text LIKE ? OR notes.title LIKE ?)`,
        [wallId,userId,`%${keyword}%`,`%${keyword}%`]);

        if(note.length<1) (notFoundError('wall'))

        return note;

    }finally{
        if(connection) connection.release();
    }
}

module.exports = selecAllNotesModel;