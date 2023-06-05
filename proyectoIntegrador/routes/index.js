var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();
const controladorI = require('../controllers/indexController')


/* GET home page. */
router.get('/',indexController.principal );
router.get("/search",indexController.search);



module.exports = router;
