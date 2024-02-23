
const express = require('express');
const router = express.Router()

//Rutas

const userRoutes = require ('./userRoutes');
const noteRoutes = require ('./noteRoutes');
const wallRoutes = require ('./wallRoutes');
const labelRoutes = require ('./labelRoutes')

//Middelware qu indica las rutas

router.use(userRoutes);
router.use(noteRoutes);
router.use(wallRoutes);
router.use(labelRoutes);

module.exports = router;