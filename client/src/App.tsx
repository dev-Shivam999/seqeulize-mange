import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
const Home=lazy(()=>import ("./pages/Home"))
const Login=lazy(()=>import ("./pages/Login"))
const FindMy =lazy(()=>import ("./pages/FindMy"))
const GiveBy =lazy(()=>import ("./pages/GiveBy"))


const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/GiveBy" element={<GiveBy/>}/>
        <Route path="/FindMy" element={<FindMy/>}/>
      </Routes>
      
    </div>
  );
};

export default App;