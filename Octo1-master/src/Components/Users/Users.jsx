import React from "react";
import { User_icon, Usericon } from "./User-icon";
import './Users.css'



function Users() {
    return (
        <>
            <div className="users d-flex flex-column align-items-center py-2">
                {Usericon.map((val) => {
                 return (
                        <User_icon uimg={val.uimg} uname={val.uname}/>
                    )
            })}
            </div>
        </>
    )
}

export default Users;