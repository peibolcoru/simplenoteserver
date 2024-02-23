
//Utilidades
const savePhotoUtil = require("../../utils/savePhotoUtil");

//Modelos
const insertNoteModel = require("../../models/notes/insertNoteModel");
const validateSchema = require("../../utils/validateSchema");
const newNoteSchema = require("../../schemas/notes/newNoteSchema");

const newNoteController =async (req, res, next) => {
    try {
        const {title,text,labelId,status,wallId} = req.body;
        const userId = req.user.id;
    
        //VALIDAMOS LOS CAMPOS

        await validateSchema(newNoteSchema, req.body);

        //SI HAY IMAGEN

        let img;
        if(req.files?.image){
              img = await savePhotoUtil(req.files.image, 150);
        }

        //Creamos el tweet

        const note =await insertNoteModel(userId,wallId,title,text,labelId,status,img)

        res.send({
            status: 'ok',
            data:{
                userId: req.user.id,
                note
            },
            message: 'Nota creada con exito'        
        })
                    
    } catch (err) {
        next(err)
    }
}
module.exports = newNoteController;