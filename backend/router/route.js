const express = require('express');
const router = express.Router();
const { check, validationResult} = require("express-validator");
const usercontroller = require('../controller/registration');
const logincontroller = require('../controller/login')
const searchcontroller = require('../controller/search')
const authcontroller = require('../controller/auth')



router.post('/register', usercontroller.Registration);
router.post('/login', [
            check("email", "Please enter a valid email").isEmail(),
            check("password", "Please enter a valid password").isLength({
                min: 6
            })
            ],logincontroller.Login);

router.get('/search', authcontroller.Auth , searchcontroller.Search);


module.exports = router;