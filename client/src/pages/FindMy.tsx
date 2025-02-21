import axios from "axios";
import { useEffect, useState } from "react";


export interface TaskType {
    Assignee: {
        name: string,
        user_id: number
    },
    assignee_id: number,
    assigner_id: number,
    task: string,
    task_id: number
}
const FindMy = () => {
    const [task, setTask] = useState<TaskType[]>([])
    // FindTask
    const api = async () => {
        const { data } = await axios.get('http://localhost:3000/api/FindTask', { withCredentials: true })
        console.log(data);
        setTask(data)

    }
    useEffect(() => {
        api()
    }, [])
    return (
        <div>
            {
                task.length > 0 && task.map(t => <div>
                    user:{
                        t.Assignee.name||"none"
                    }
                    <br />
                    Task:{
                        t.task
                    }
                </div>)
            }

        </div>
    );
};

export default FindMy;