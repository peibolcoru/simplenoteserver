//Dependencias
const fs = require('fs/promises');
const path= require('path');
const sharp = require('sharp');
const uuid = require('uuid');

const {UPLOADS_DIR} = require('./constants');
const { deleteFileError } = require('../services/errorService');

const deletePhotoUtil = async (imgName)=>{
    try {
        //Obtenemos la ruta absoluta a la carpeta uploads
        const imgPath= path.join(__dirname,'..','..',UPLOADS_DIR,imgName);

        try {
            await fs.access(imgPath);
        } catch {
            //si no existe finalizamos la funcion
            return
        }
    //ELiminamos la imagen
       await fs.unlink(imgPath)

    } catch (err) {
        console.error(err);
        deleteFileError()
    }
}
module.exports = deletePhotoUtil;