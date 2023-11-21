import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';

export const signup = async(req,res,next) => {
    const {usernmae , email , password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username , email , password: hashedPassword});
    try{
        await newUser.save();
        res.status.json("User created sucsessfully..!");
    }
    catch(error){
        next(error);
    }
};
