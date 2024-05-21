const asyncHandler=require("express-async-handler");
const User=require("../models/userModel")

const registerUSer=asyncHandler(async(req,res)=>{
    const {name, email, pic, password}=req.body;

    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please Enter all the fields!!");

    }

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error("User already Registered!");
    }

    const user=await User.create({
        name, email, password, pic,
    });

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            pic: user.pic,
        })
    }
    else{
        res.status(400);
        throw new Error("Failed to register user! Please try again");
    }
});

module.exports={registerUSer};