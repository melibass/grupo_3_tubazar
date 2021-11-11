const express = require('express');
const router = express.Router();
const controller = require('../controller/usersController')

const path=require('path');

/*middleware*/
const uploadFile =require('../middleware/multerMiddleware');
const validation=require ('../middleware/validatorRegisterMiddleware');

/*Register*/
router.get('/register', controller.register);


    
/*Login*/
router.get('/login',controller.login);
router.post('/login', controller.logged);



//proceso de registro
router.post('/register',uploadFile.single('avatar'),validation,controller.processRegister);





module.exports=router; 