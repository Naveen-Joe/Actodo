import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"

function Signup(props)
{
    const navigate=useNavigate()
    const users=props.users
    const setusers=props.setusers

    const [eusername,seteusername]=useState()
    const [epassword,setepassword]=useState()

    
    function handleEuInput(evt)
    {
        seteusername(evt.target.value)
    }

    function handleEpInput(evt)
    {
        setepassword(evt.target.value)
    }

    function addUser()
    {
        setusers([...users,{username:eusername,password:epassword}])
        navigate("/")
    }

    return(
        <div className="bg-black p-10">
            <div className="bg-slate-100 p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>I help you manage your activities after you login:)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input onChange={handleEuInput} type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Username" />

                    <input onChange={handleEpInput} type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Password" />

                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Confirm Password" />

                    <button onClick={addUser} className="bg-[#FCA201] w-24 p-1 rounded-md">Sign Up</button>

                    <p>Already Have an account? <Link to={'/'} className="underline">Login</Link> </p>
                </div>
            </div>
        </div>
    )
}
export default  Signup