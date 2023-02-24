const asyncHandler = require('express-async-handler');
const User=require('../models/UserModel');
const generateToken=require('../config/generateToken');

const registerUser=(async()=>{
    const {name,email,password,pic}=req.body;
    if(!name||!email||!password||!pic){
        res.status(422).json({error:"Please add all the fields"})
    }
    const userExists=await User.findOne({ email } );
    if(userExists){
        res.status(400);
        throw new Error("User already exists")
    }
    const user=await User.create({
        name,
        email,
        password,
        pic,
    });
    if(user)
    {
        res.status(201).json({
            id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:generateToken(user._id),
        })
    }else{
        res.status(400);
        throw new Error("Invalid user data")
    }
});

module.exports={registerUser};