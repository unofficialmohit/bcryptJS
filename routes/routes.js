const express=require('express');
const user=require('../controllers/userController')
const router=express.Router();
router.get('/displayinfo',user.displayInfo);
router.post('/uploadinfo',user.uploadInfo);
router.get('/login/',user.login);
module.exports=router;