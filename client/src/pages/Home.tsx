import axios from "axios";
import { useEffect, useState } from "react";


interface userIdType {
    user_id: number
}
const Home = () => {
    const [userId, setUserId] = useState<userIdType[]>([])
    const [task, setTask] = useState({

        assignee_id: "",
        task: ""
    })
    const api = async () => {
        const { data } = await axios.get('http://localhost:3000/api/Find')
        console.log(data);
        setUserId(data)

    }
    useEffect(() => {
        api()
    }, [])

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await axios.post('http://localhost:3000/api/Task',{
            task: task.task, assignee_id:task.assignee_id
        },{
            withCredentials: true
        })

    }

    return (
        <div>
            Home
            user {
                userId.length > 0 && userId.sort((a, b) => a.user_id - b.user_id).map(p => <div key={p.user_id}>{p.user_id}</div>)
            }

            <div>
                <form onSubmit={(e)=>submit(e)}>
                    <input type="text" onChange={(e) => setTask((p) => ({ ...p, assignee_id: e.target.value }))} placeholder="kis ko dena hia" />
                    <input type="text" onChange={(e) => setTask((p) => ({ ...p, task: e.target.value }))} placeholder="task name" />
                    <button>submit</button>
                </form>
            </div>
        </div>
    );
};

export default Home;