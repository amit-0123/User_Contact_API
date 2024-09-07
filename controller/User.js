import { User } from "../model/User.js";

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


// User register
export const userRegister = async(req,res)=>{
    const {name,email,password} = req.body;

    if(name==' '|| email==' '||password==' ') return res.status(400).json({message:"All fields are required"})

    let registerUser = await User.findOne({email});

    if(registerUser) return res.json({message:"User already exist with this email"});

    const hashPass =await bcrypt.hash(password,10);

     registerUser = await User.create({name,email,password:hashPass});

    res.json({message:"Registered Successfully",registerUser});
    
}

export const userLogin = async(req,res)=>{
    const {email,password} = req.body;

    if( email==' '||password==' ') return res.status(400).json({message:"All fields are required"})

    const user = await User.findOne({email});

    if(!user) return res.json({message:" User Not Found"})

    const validPass =await bcrypt.compare(password,user.password);

    if(!validPass) return res.json({message:"Invalid Password"})
     
    //  store userId information  for authentication
    const token = jwt.sign({userId:user._id},process.env.jwt_secret,{expiresIn:'1d'})
    //    this is 'secret key' you can write any things

    res.json({message:`Welcome back ${user.name}`,token})
}