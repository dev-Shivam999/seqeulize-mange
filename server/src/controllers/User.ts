import { Request, Response } from "express"
import { index } from "../models"

export const User = async (req: Request, res: Response) => {
    const {data} = req.body
    if (!data) {
        return res.json({ success: false, message: "try" })
    }
  try {
   const user=   await index.User.create(
          {
              name: data.name,
              email: data.email

          }
      )
      //@ts-ignore
    return res.cookie("token", user.user_id).json({ success: true, message:user})
  } catch (error) {
    console.log( error);
    return res.json({ success: false, message:"try again"})
    
  }

}