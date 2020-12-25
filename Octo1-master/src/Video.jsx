import React from "react";
import IconControl from "./Icon-container";
import Chats from "./Chats";

function IconContainer(prop) {
    return (<div className="icon-Container">
        <img src={prop.isvg} alt= "icon image"/>
    </div>)
}

function Video() {
    return (
        <>
            <div className="video">
                <div className="control_panel">
                    <div className="full-screen d-flex flex-column ">
                        <IconContainer isvg={IconControl[0].isvg} />
                       
                    </div>
                    <div className="mic-panel d-flex flex-column">
                        <IconContainer isvg={IconControl[1].isvg} />
                        <IconContainer isvg={IconControl[2].isvg}/>
                        <IconContainer isvg={IconControl[3].isvg}/>
                    </div>
                    <div className="sharing d-flex flex-column">
                        <IconContainer isvg={IconControl[4].isvg}/>
                        <IconContainer isvg={IconControl[5].isvg}/>
                        <IconContainer isvg={IconControl[6].isvg}/>
                    </div>
                    <div className="quality d-flex flex-column">
                        <IconContainer isvg={IconControl[7].isvg}/>
                    </div>
                </div>
                <Chats/>
                
            </div>
        </>
    )
}

export default Video;