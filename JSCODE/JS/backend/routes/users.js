var express = require('express');
var router = express.Router();
let users = require('../controllers/UsersController')

router.post('/',users.registerUser)
router.post('/login',users.login)

module.exports = router;
