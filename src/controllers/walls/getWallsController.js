const selectAllWallModel = require("../../models/walls/selectAllWallModel");

const getWallsController = async (req,res,next)=>{
    try{
    
    //datos del usuario
    const userId = req.user.id;

    const walls = await selectAllWallModel(userId);
    res.send({
        status : 'ok',
        data: walls,
        message: 'Found walls',
    })
    
    
    } catch (err) {
        next(err)
    }
}
module.exports = getWallsController;