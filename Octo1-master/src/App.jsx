import React from "react";
import Panel from "./Components/Panel/Panel"
import Meetings from "./Components/Discription/Meetings"
import Video from "./Components/Video/Video"
import Users from "./Components/Users/Users";
import './App.css'

const scrollTop = (e)=>{
let bg = document.getElementsByClassName("background-img1");
console.log(bg[0]);
bg[0].style.opacity = "0";
bg[0].style.transform = "scale(0)";
bg[0].style.opacity = "0";
let container = document.getElementById("container");
container.style.transform = "rotateZ(0deg) scale(1)";    
container.style.opacity = "1";    
}   
function App() {
    return (
        <>  
            <main>
                <div className="background-img1 my-5">
                    <img src="/images/lifecycle-works.png" alt = "background"/>
                    <div class="btn" onClick={(e)=>{scrollTop(e)}}> open</div>
                </div>
                <div id="container" className="container"> 
                
                    <Panel/>
                    <Meetings/>
                    <Video/>
                    <Users/>
                </div>
            </main>  
            </>
    )
}
export default App;