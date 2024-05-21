const express=require("express");
const { registerUSer } = require("../controller/userController");

const router =express.Router();

router.route('/').post(registerUSer);
// router.post('/login',authUser);

module.exports=router;