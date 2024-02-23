const deleteWallModel = require("../../models/walls/deleteWallModel");

const deleteWallController = async (req,res,next)=>{
    try {
        // id del usuario
        const userId = req.user.id;
        //id del muro
        const {wallId}= req.params;

        await deleteWallModel(wallId,userId);

        res.send({
            status: 'ok',
            message: `Wall ${wallId} deleted successfully`,
        })
    } catch (err) {
        next(err);
    }
}

module.exports = deleteWallController;