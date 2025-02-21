import { Request, Response } from "express";
import { index } from "../models";

export const Task = async (req: Request, res: Response) => {
    try {

        const assigner_id = req.cookies?.token


        const { task, assignee_id } = req.body;
        console.log(task, assignee_id, assigner_id);


        if (!task || !assigner_id || !assignee_id) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields: task, assigner_id, assignee_id",
            });
        }


        const newTask = await index.Task.create({
            task,
            assigner_id,
            assignee_id,
        });


        return res.status(201).json({
            success: true,
            message: "Task created successfully",
            data: newTask,
        });

    } catch (error) {
        console.error("Error creating task:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
