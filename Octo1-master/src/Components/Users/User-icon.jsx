import React from "react";

const Usericon = [
    {
        id: "userimg1",
        uimg: "https://images.unsplash.com/photo-1608057012077-75a51d00540d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        uname: "Dextra"
    },  {
        id: "userimg2",
        uimg: "https://images.unsplash.com/photo-1607392310614-4e50fc051f11?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80",
        uname: "Sinestria"
    },  {
        id: "userimg3",
        uimg: "https://images.unsplash.com/photo-1608153488161-803b502750fc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        uname: "Arthur"
    },  {
        id: "userimg4",
        uimg: "https://images.unsplash.com/photo-1607929339579-a1b993e6b7a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
        uname: "Omen"
    },
    {
        id: "userimg5",
        uimg: "https://images.unsplash.com/photo-1594063596316-aa5f41ceb8dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        uname: "Veera"
    },
    {
        id: "userimg6",
        uimg: "/images/plus.png",      
    },

]
function User_icon(prop) {
    return (
        <>
            <div className="user_imgcontainer">
                 <img src={prop.uimg} alt="user-icon"/>
            </div>
            <p >{prop.uname}</p>
        </>
    )
}

export {User_icon, Usericon};