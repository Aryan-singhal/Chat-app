const express=require("express");
const { registerUser, authUser, allUsers } = require("../controller/userController");
const { protect } = require("../middleware/authMiddleware");

const router =express.Router();


router.post('/login',authUser);
router.route('/').post(registerUser).get(protect,allUsers);


module.exports=router;