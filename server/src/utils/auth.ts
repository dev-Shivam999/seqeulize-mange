import { NextFunction, Request, Response } from "express";
import { index } from "../models";

export interface CustomRequest extends Request{
    userId: number
}

export const auth=async(req:CustomRequest,res:Response,next:NextFunction)=>{
    const token =req.cookies?.token
    if (!token) {
        return res.json({success:false,message:"login plz"})
    }
    const data =await index.User.findOne({
        where:{
            user_id:token
        }
    })
    if (!data) {
        return res.json({ success: false, message: "login plz" })

    }
    req.userId=token;
    next()

}