import {  Response } from "express";
import { index } from "../models";
import { Op } from "sequelize";
import { CustomRequest } from "../utils/auth";

export const FindUser=async(req:CustomRequest,res:Response)=>{
    const token  = req.userId

console.log(token);

    const data = await index.User.findAll({
        where: {
            user_id: {
                [Op.ne]: token
            }
        },
        attributes: ["user_id", "name"]
    })
    res.json({success:true,data:data})
}