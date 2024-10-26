
function TodoItem(props)
{
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr


    function handleDelete(removeid)
    {
        let temparr = activityArr.filter(function(item){
            if(item.id === removeid)
            {
                return false
            }
            else{
                return true
            }
        })
        setactivityArr(temparr)
    }

    return(
        <div className="flex justify-between">
        <p>{props.index+1}.{props.activity}</p>
        <button onClick={()=>handleDelete(props.id)} className="text-red-500">Delete</button>
        </div>
    )
}


export default TodoItem