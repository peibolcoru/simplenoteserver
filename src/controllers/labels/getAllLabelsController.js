const selectAllLabelsModel = require("../../models/labels/selectAlllLabelsModel")

const getAllLabelsController = async (req,res,next) =>{
    try {

        const labels = await selectAllLabelsModel();

        res.send({
            status:'ok',
            data:{labels}
            })
    } catch (err) {
        next(err)       
    }

}
module.exports = getAllLabelsController;