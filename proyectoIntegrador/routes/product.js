var express = require('express');
const productControllers = require('../controllers/productControllers');
var router = express.Router();
const controladorP = require('../controllers/productControllers');



router.get('/', productControllers.producto)
router.get("/agregarproducto", productControllers.agregar);


module.exports = router;