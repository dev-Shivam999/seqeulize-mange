import { Request, Response } from "express";
import { index } from "../models";
import { Op } from "sequelize";

export const FindUser=async(req:Request,res:Response)=>{
    const { token } = req.cookies


    const data = await index.User.findAll({
        where: {
            user_id: {
                [Op.ne]: token
            }
        },
        attributes: ["user_id", "name"]
    })
    res.json(data)
}