import Header from "./Components/Header";
import Card from "./Components/Card";
import TodoContainer from "./Components/TodoContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Component/Login";
import Signup from "./Pages/Component/Signup";
import Landing from "./Pages/Component/Landing";
import { useState } from "react";


function App()
{

  const [users,setusers]=useState(
    [
        {
            username:"john",
            password:"123"
        }
    ]
)
  return(
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login users={users} setusers={setusers}></Login>}></Route>
      <Route path="/signup" element={<Signup users={users} setusers={setusers}></Signup>}></Route>
      <Route path="/landing" element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  
  )
}

export default App;
