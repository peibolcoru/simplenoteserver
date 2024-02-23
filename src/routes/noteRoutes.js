const express = require('express');
const router = express.Router();

//Controladoras
const { newNoteController, getNotesWallController, deleteNoteController, getOneNoteContoller, updateNoteController } = require('../controllers/notes');

//Intermedias
const authUserController = require('../middelwares/authUserController');

// Importamos las rutas

//nueva nota
router.post('/notes/new',authUserController, newNoteController);
//Todas las notas del muro
router.get('/notes/:wallId',authUserController, getNotesWallController);
//Una nota del muro
router.get('/notes/note/:noteId',authUserController, getOneNoteContoller);
//Borrar nota
router.delete('/notes/delete/:noteId',authUserController,deleteNoteController);
//actualizar nota
router.put('/notes/update/:noteId',authUserController,updateNoteController);


module.exports = router;
