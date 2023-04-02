<<<<<<< HEAD
var express = require('express'); 
=======
var express = require('express');
const productControllers = require('../controllers/productControllers');
>>>>>>> 6b113ddb2ee571367e060b662ff7879a255aee3e
var router = express.Router();
const controladorP = require('../controllers/productControllers');




router.get("/agregarproducto", productControllers.agregar);


module.exports = router;