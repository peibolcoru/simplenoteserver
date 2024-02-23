//Dependecncias
jwt = require('jsonwebtoken');

//Importamos las funciones de errores
const { notAuthenticatedError, invalidTokenError } = require('../services/errorService');


const authUserController = async (req,res,next) => {
    try {
        //Obtenemos el token de la propiedad Autorization del header
        const {authorization} = req.headers;
        
        if(!authorization) {
           notAuthenticatedError();
        }

        //variable que contiene el token
        let userInfo;
        try {
            userInfo = jwt.verify(authorization, process.env.SECRET);

            //Agregamos una nueva propiedad inventada
            req.user = userInfo;

            //Funcion Controladora intermedia_____>
            next();

        } catch (err) {
            console.error(err)
            invalidTokenError();
        }

    } catch (err) {
        next(err)
    }
}

module.exports= authUserController;