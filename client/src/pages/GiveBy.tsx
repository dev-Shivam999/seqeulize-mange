import axios from "axios";
import { useEffect, useState } from "react";
import { TaskType } from "./FindMy";

interface newTaskType extends TaskType  {
    Assigner: {
        name: string,
        user_id: number
    },
}
const GiveBy = () => {
    
        const [task, setTask] = useState<newTaskType[]>([])
    const api=async()=>{
     const {data}= await axios.get('http://localhost:3000/api/GiveTask',{withCredentials:true})
     console.log(data);
     
     setTask(data);
     
    }
    useEffect(()=>{
api()
    },[])
    return (
        <div>
            <div>
                {
                    task.length > 0 && task.map(t => <div>
                        user:{
                            t.Assigner.name || "none"
                        }
                        <br />
                        Task:{
                            t.task
                        }
                    </div>)
                }

            </div>
        </div>
    );
};

export default GiveBy;