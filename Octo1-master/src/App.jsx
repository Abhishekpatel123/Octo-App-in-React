import React from "react";
import Panel from "./Panel"
import Meetings from "./Meetings"
import Video from "./Video"
import Users from "./Users";
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