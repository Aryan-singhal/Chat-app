const express=require("express");
// const { registerUser, authUser, allUsers } = require("../controller/userController");
const { protect } = require("../middleware/authMiddleware");

const router =express.Router();


// router.route("/").get(protect, fetchChats)
router.route("/").post(protect, accessChats)
// router.route("/group").post(protect, createGroupChat)
// router.route("/rename").put(protect, renameGroup)
// router.route("/groupremove").put(protect, removeFromGroup)
// router.route("/grouprename").put(protect, addToGroup)



module.exports=router;