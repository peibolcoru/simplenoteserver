//esquemas
const newNoteSchema = require ("../../schemas/notes/newNoteSchema");
const validateSchema = require("../../utils/validateSchema");

//modelos
const updateNoteModel = require("../../models/notes/updateNoteModel");

const updateNoteController = async (req,res,next)=>{
    try {
         //obtenemos el muro por params
        const {noteId} = req.params;

        const userId = req.user.id;
        const {wallId,title,text,labelId,status} = req.body;
        
        //validamos los datos recibidos
        await validateSchema(newNoteSchema,req.body)

        //actualizamos la nota
        const updatedNote = await updateNoteModel(noteId,userId,wallId,title,text,labelId,status)

        res.send({
            status:'ok',
            data:{
                userId: req.user.id,
                updatedNote
            },
            message: 'Nota creada con exito',
        })

    } catch (err) {
        next(err)
    } 
}
module.exports = updateNoteController;