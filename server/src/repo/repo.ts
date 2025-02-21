import { index } from "../models";

export const findAssigneeAndAssigner = async (data: any, name: string) => {
 
try {

    const tasks = await index.Task.findAll({
        where: data,
        attributes: ["assigner_id", "assignee_id", "task", "task_id"],
        include: [
            {
                model: index.User,
                as: name,
                attributes: ["name", "user_id"],
            },
        ],

    });
    return tasks
} catch (error) {
    console.log(error);
    return "error"
    
}
}