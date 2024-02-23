const express= require('express');
const router = express.Router();

//Controladora
const getAllLabelsController = require("../controllers/labels/getAllLabelsController");

router.get('/labels',getAllLabelsController)

module.exports = router;