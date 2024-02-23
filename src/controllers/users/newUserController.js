
const insertUserModel = require("../../models/users/insertUserModel");
const newUserSchema = require("../../schemas/users/newUserSchema");
const { missingFieldsError } = require("../../services/errorService");
const validateSchema = require("../../utils/validateSchema");

//Función Controladora que inserta un usuario
const newUserController = async (req,res,next)=>{
    try {
        const {username,email,password} = req.body;

        //validamos el body con el esquema
        await validateSchema(newUserSchema, req.body);

        await insertUserModel(username,email,password);

        res.send({
            status: 'ok',
            message: 'Usuario creado',
        })

    } catch (err) {
        next(err);
    }



}

module.exports = newUserController;