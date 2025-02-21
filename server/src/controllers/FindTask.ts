import { Request, Response } from "express";
import { findAssigneeAndAssigner } from "../repo/repo";

export const FindTask = async (req: Request, res: Response) => {
    try {
        const  assignee_id  = req.cookies?.token;
        console.log(assignee_id);
        

        if (!assignee_id) {
            return res.status(400).json({ error: "assignee_id is required" });
        }

        const tasks = await findAssigneeAndAssigner({ assigner_id: assignee_id },"Assignee")

        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Something went wrong", details: error });
    }
};
