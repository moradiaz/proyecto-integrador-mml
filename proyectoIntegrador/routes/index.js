var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();
const controladorI = require('../controllers/indexController')


/* GET home page. */
router.get('/',indexController.principal );
router.get("/register", indexController.index);
router.get("/login", indexController.login);
router.get("/search",indexController.search);

router.post("/login", indexController.ingresar);


module.exports = router;
