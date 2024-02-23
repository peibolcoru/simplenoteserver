//Utitlidades
const deletePhotoUtil = require("../../utils/deletePhotoUtil");
const savePhotoUtil = require("../../utils/savePhotoUtil");

//Models
const selectUserByIdModel = require("../../models/users/selectUserByIdModel");
const updateAvatarModel = require("../../models/users/updateAvatarModel");

//Errores
const { missingFieldsError } = require("../../services/errorService")

const editUserAvatarController = async (req, res, next) => {

    try {
        //si no existe avatar lanza error. 
        // previamente comprueba que llega un req.files con ?
        if(!req.files?.avatar) missingFieldsError(); 

        //Obtenemos datos de usuario
        const user = await selectUserByIdModel(req.user.id);

        //Si hay avatar lo eliminamos de la carpeta uploads
        if(user.avatar){
            await deletePhotoUtil(user.avatar);

        }

        const avatarName = await savePhotoUtil(req.files.avatar,150);
        
        await updateAvatarModel(req.user.id,avatarName);
        
        res.send({
            status: 'ok',
            message: 'Updated user',
        });
    } catch (err) {
    next(err)
    }
    
}

module.exports = editUserAvatarController;