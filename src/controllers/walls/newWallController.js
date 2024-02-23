const insertWallModel = require("../../models/walls/insertWallModel")

const { missingFieldsError } = require("../../services/errorService")

const newWallController = async (req,res,next)=>{
    try {
        const {title} = req.body;
        const userId = req.user.id;
        
        //Comprobamos que llega titulo
        if (!title) {
            missingFieldsError();
        }

        // insertamos el muro
        await insertWallModel(userId,title)

        res.send({
            status: 'ok',
            message: 'Created wall',
        })

    } catch (err) {
        next(err)
    }
}

module.exports = newWallController;