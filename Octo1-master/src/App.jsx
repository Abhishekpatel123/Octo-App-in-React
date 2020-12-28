import React from "react";
import Panel from "./Components/Panel/Panel"
import Meetings from "./Components/Discription/Meetings"
import Video from "./Components/Video/Video"
import Users from "./Components/Users/Users";
import './App.css'
function App() {
    return (
        <>  
            <main>
                <div className="background-img1 my-5">
                    <img src="/images/lifecycle-works.png" alt = "background"/>
                </div>
                <div className="container"> 
                    <Panel/>
                    <Meetings/>
                    <Video/>
                    <Users/>
                </ div>
            </main>  
            </>
    )
}

export default App;