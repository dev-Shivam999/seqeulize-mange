import { Request, Response } from "express";
import { findAssigneeAndAssigner } from "../repo/repo";

export const GiveTask = async (req: Request, res: Response) => {
    const  assigner_id  =  req.cookies?.token
    console.log(assigner_id);
    
    if (!assigner_id) {
        return res.json({success:false,message:"login kar"})
    }

    const data =  await findAssigneeAndAssigner({ assignee_id: assigner_id }, "Assigner")
   

    return res.json(data)
}