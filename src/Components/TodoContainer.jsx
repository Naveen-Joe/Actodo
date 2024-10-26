import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"
function TodoContainer()
{
    
    const [activityArr,setactivityArr]=useState([
        {
            id:1,
            activity:"Go For a walk"
        },
        {
            id:2,
            activity:"Have Breakfast"
        }
    ])
    return(        
      <div >

        <div className="flex  gap-5 flex-wrap  mt-10">
            <AddTodoForm activityArr={activityArr} setactivityArr={setactivityArr} />
            <TodoList activityArr={activityArr} setactivityArr={setactivityArr} />
    
        </div>
      </div>
    
    )
}

export default TodoContainer