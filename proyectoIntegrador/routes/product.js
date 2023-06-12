var express = require('express');
const productControllers = require('../controllers/productControllers');
var router = express.Router();

router.get("/agregarproducto", productControllers.agregar);
router.post('/agregarproducto', productControllers.storeProduct);
router.post('/borrar', productControllers.borrar)
router.post('/editarproducto', productControllers.editarPost);
router.get('/editarproducto/:id', productControllers.editar);
router.get('/:id', productControllers.producto)
 


module.exports = router;