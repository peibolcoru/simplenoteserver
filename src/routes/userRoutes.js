// Importamos express y creamos un router

const express = require('express');
const router = express.Router();

// Importamos las rutas
const {newUserController, loginUserController, editUserAvatarController} = require('../controllers/users/index.js');

// Importamos las funciones controladoras intemedias.
const authUserController = require('../middelwares/authUserController.js');
const getUserController = require('../controllers/users/getUserController.js');

//Registro de Usuario

    //registro
router.post('/users/register',newUserController);
    //login
router.post('/users/login',loginUserController);
    //Datos del usuario
router.get('/users',authUserController, getUserController);
    //actualizar avatar
router.put('/users/avatar',authUserController,editUserAvatarController);

module.exports = router;
