import { useLocation } from "react-router-dom"
import Header from "../../Components/Header";
import Card from "../../Components/Card";
import TodoContainer from "../../Components/TodoContainer";

function Landing()
{
    const data= useLocation()
    console.log(data.state.user)

    return(
    <div>
    <div className="bg-black p-10">
    <div className="bg-[#EFEFEF] p-10 border rounded-md" >
      
    <Header username={data.state.user} />
    <br></br>

<div className="flex flex-wrap gap-5">
    <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}/>
    <Card bgcolor={"#FD6663"} title={"December"} subtitle={"10:00:00"}/>
    <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}/>
</div>
    <div>
      <TodoContainer/>
    </div>
    </div>
    <div>
      
    </div>
    </div>
  </div>

    )
}

export default Landing