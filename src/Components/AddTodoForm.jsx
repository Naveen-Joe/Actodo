import { useState } from "react"

function AddTodoForm(props)
{
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    const [newactivity,setnewactivty]=useState("")

    function handleChange(evt)
    {
        setnewactivty(evt.target.value)
    }

    function handleAdd()
    {
        setactivityArr([...activityArr,{id:activityArr.length+1, activity:newactivity}])
        setnewactivty("")
    }
    return(
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
            <input value={newactivity} onChange={handleChange} type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity" />
            <button onClick={handleAdd} className="bg-black text-white border p-1 border-black">Add</button>
            </div>
        </div>  
    )
}

export default AddTodoForm