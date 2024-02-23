const selectNoteModel = require("../../models/notes/selectNoteModel");

const getOneNoteContoller = async (req,res,next) =>{
    try {
        const userId = req.user.id;
        const {noteId} = req.params;
        console.log(userId,noteId)
        const note = await selectNoteModel(noteId,userId);

        res.send({
            status : 'ok',
            data: {note},
            message: "note selected successfully"
        })
    
    } catch (err) {
        next(err)    
    }
}

module.exports = getOneNoteContoller;