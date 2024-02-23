
//Importamos las dependencias
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');
require('dotenv').config();

//Importamos el model.
const selectUserByEmailModel = require('../../models/users/selectUserByEmailModel');

//errores
const { invalidCredentialsError } = require('../../services/errorService');

//joi
const loginUserSchema = require('../../schemas/users/loginUserSchema');
const validateSchema = require('../../utils/validateSchema');

//Funcion Controladora
const loginUserController = async (req,res,next)=>{
try {
    // datos necesarios del body
    const {email, password} = req.body;
    
    //validamos el body con el esquema
    await validateSchema(loginUserSchema, req.body);
    
    //llamamos al modelo
    const user = await selectUserByEmailModel(email);

    //Comprobamos si la contraseña es correcta
    const validatePass = await bcrypt.compare(password, user.password);
    
    if(!validatePass) {
        invalidCredentialsError();
    }

    //Generamos un objeto con la info que queremos agregar al token
    const tokenInfo= {
        id: user.id,
        name: user.name
    };

    const token = jwt.sign (tokenInfo, process.env.SECRET, {
        
    expiresIn: '7d'})

    //Enviamos el token
    res.send({
        status:"ok",
        data: {token}
    })

} catch (err) {
    next(err)
}
}
module.exports = loginUserController;