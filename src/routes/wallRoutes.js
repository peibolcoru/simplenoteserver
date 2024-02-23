const express = require ('express');
const router = express.Router();

//Funciones controladoras intermedias
const authUserController = require('../middelwares/authUserController');

//Funciones de controlador
const { newWallController, getWallsController, deleteWallController } = require('../controllers/walls');

//Añadir Muro
router.post('/walls/addwall',authUserController,newWallController);
//Listar Muros
router.get('/walls/',authUserController,getWallsController);
//Borrar Muro
router.delete('/walls/delete/:wallId',authUserController,deleteWallController);

module.exports = router;