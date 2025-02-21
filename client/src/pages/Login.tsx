import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigator =useNavigate()
    const [user,setUser]=useState({
        name:"",
        email:""
    })
    const submit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
      const {data}=  await axios.post('http://localhost:3000/api/create',{
            data:user
        },{
            withCredentials: true
        })
        console.log(data);
        if (data.success) {
            navigator('/')

            
        }
        
    }
    return (
        <div>
            Login

            <form  onSubmit={(e)=>submit(e)}>
                <input type="text"  onChange={(e)=>setUser((user)=>({...user,name:e.target.value}))} placeholder="name" />
                <input type="email" onChange={(e)=>setUser((user)=>({...user,email:e.target.value}))} placeholder="email" />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Login;