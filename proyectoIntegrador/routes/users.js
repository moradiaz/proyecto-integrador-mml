var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

/* GET users listing. */

router.get('/perfil/:id', usersController.perfil);
router.post("/perfil", usersController.store);
router.get("/editarperfil", usersController.editar )

module.exports = router;
