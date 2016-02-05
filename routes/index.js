var express = require('express');
var router = express.Router();
var path = require('path');
var adminAuth = require('../controllers/adminAuth');

router.post('/login', adminAuth.login);
router.post('/signup', adminAuth.signup);

router.get('/', function (req, res, next){
	res.sendFile(path.resolve('app/index.html'));
});

module.exports = router;