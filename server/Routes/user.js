const express =require('express');
const userSignupController = require('../Controller/userSignup');
const router=express.Router();


router.post('/signup',userSignupController);


module.exports=router;