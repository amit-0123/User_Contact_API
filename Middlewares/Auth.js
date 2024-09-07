import jwt from 'jsonwebtoken'
import { User } from '../model/User.js';

export const Authenticate = async(req,res,next)=>{
    const token = req.header("Auth")
    // Auth is Header name
    // console.log("This is token: ",token);

    // decode token
    if(!token) return res.status(400).json({message:'Login first'});
    const decoded = jwt.verify(token,process.env.jwt_secret);

    // pass same secret key which is used to make token to store user Id data

    console.log(decoded);
    const id = decoded.userId;
    const user = await User.findById(id);
    if(!user) return res.json({message:"user not found"});
    req.user = user;
    // so that i could use anywhere from req.user
    next();
}