//Dependencias
const fs = require('fs/promises');
const path= require('path');
const sharp = require('sharp');
const uuid = require('uuid');

const {UPLOADS_DIR} = require('./constants');
const { saveFileError } = require('../services/errorService');

const savePhotoUtil = async (img, width )=>{
    try {
        //Obtenemos la ruta absoluta a la carpeta uploads
        const uploadsPath= path.join(__dirname,'..','..',UPLOADS_DIR);

        try {
            await fs.access(uploadsPath);
        } catch {
            await fs.mkdir(uploadsPath);
        }

        //convertimos la imagen a un objeto de tipo sharp
        const sharpImg = sharp(img.data);

        //redimensionamos la imagen
        sharpImg.resize(width);

        //generamos un nombre unico para la imagen

        const imgName = `${uuid.v4()}.jpg`;
        
        //Generanos la ruta

        const ImgPath = path.join(uploadsPath,imgName);
        
        //Guardamos la imgen en el disco

        await sharpImg.toFile(ImgPath);

        //retornamos el nombre de la imagen

        return imgName;

    } catch (err) {
        console.error(err);
        saveFileError();
    }
}
module.exports = savePhotoUtil ;