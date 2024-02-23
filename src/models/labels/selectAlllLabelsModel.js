const getDb = require ('../../db/getDb.js')

const selectAllLabelsModel = async ()=>{
    let connection;
    try{
        connection= await getDb();
        const[labels] = await connection.query(`
        SELECT * FROM labels
        `)

        if(labels.length<1) { notFoundError('labels')};
        
        return labels;
    }
    finally{
        if(connection)connection.release()
    }
}

module.exports = selectAllLabelsModel;
