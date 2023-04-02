var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();
const controladorI = require('../controllers/indexController')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/register", indexController.index )
router.get("/login", indexController.login )


module.exports = router;
