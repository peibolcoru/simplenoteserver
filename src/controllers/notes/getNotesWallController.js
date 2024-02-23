const selecAllNotesModel = require("../../models/notes/selecAllNotesModel");

const getNotesWallController = async (req,res,next) => {
    
    try {
        
        //obtenemos el muro por params
        const {wallId} = req.params;
        
        //obtenemos el usuario autenticado
        const userId = req.user.id;

        //si hay palabra clave por req.params
        let {keyword} = req.query;
        
        const notes = await selecAllNotesModel(wallId,userId,keyword);

        res.send({
            status:'ok',
            data:{notes}
        });
        
    } catch (err) {
        next(err)
        
    }}

module.exports = getNotesWallController;