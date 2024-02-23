const deleteNoteModel = require("../../models/notes/deletenoteModel")

const deleteNoteController = async (req,res,next)=>{
    try {
        
        const userId= req.user.id;
        const {noteId}= req.params;
        
        await deleteNoteModel(noteId,userId)

        res.send({
            status: 'ok',
            message: 'Note deleted successfully',
        }
        )
    } catch (err) {
        next(err)
    }
}
module.exports = deleteNoteController;