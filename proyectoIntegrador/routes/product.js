var express = require('express');
const productControllers = require('../controllers/productControllers');
var router = express.Router();




router.get('/', productControllers.producto)
router.get("/agregarproducto", productControllers.agregar);
router.get('/findAll', productControllers.all)


module.exports = router;