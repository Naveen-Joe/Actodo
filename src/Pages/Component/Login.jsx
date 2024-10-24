import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props)
{

    const navigate=useNavigate()
    const [ruser,setruser]=useState(true)
    const [eusername,seteusername]=useState()
    const [epassword,setepassword]=useState()

    const users=props.users

    function checkUser()
    {
        var userfound = false

        users.forEach(function(item){
            if(item.username===eusername && item.password===epassword)
            {
                console.log("succesful")
                userfound=true
                navigate("/landing",{state:{user:eusername}})
            }
        })

        if(userfound===false)
        {
            console.log("failed")
            setruser(false)
        }
    }

    function handleEuInput(evt)
    {
        seteusername(evt.target.value)
    }

    function handleEpInput(evt)
    {
        setepassword(evt.target.value)
    }
    return(
        <div className="bg-black p-10">
        <div className="bg-slate-100 p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            {ruser?<p>I help you manage your activities after you login:)</p>:<p className="text-red-500">Please Sign up before you Login</p>}
            
            <div className="flex flex-col gap-2 my-2">
                <input onChange={handleEuInput} type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Username" />

                <input onChange={handleEpInput} type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Password" />

    
                <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkUser}>Login</button>

                <p>Dont't have an account? <Link to={'/signup'} className="underline">Sign Up</Link> </p>
            </div>
        </div>
    </div>
    )
}
export default Login