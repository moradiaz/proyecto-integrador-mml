var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

/* GET users listing. */

router.get('/perfil/:id', usersController.perfil);
router.post("/perfil", usersController.store);

router.get("/editarperfil", usersController.editar);

router.get("/register", usersController.index);

router.get("/login", usersController.login);
router.post('/login', usersController.processLogin);

router.post('/logout', usersController.logout);



module.exports = router;
