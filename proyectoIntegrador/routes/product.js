var express = require('express');
const productControllers = require('../controllers/productControllers');
var router = express.Router();




router.get('/', productControllers.producto)
router.get("/agregarproducto", productControllers.agregar);



module.exports = router;