var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

/* GET users listing. */

router.get('/perfil', usersController.perfil);

router.get("/editarperfil", usersController.editar )

module.exports = router;
