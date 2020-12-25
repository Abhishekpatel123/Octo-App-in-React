import React, { useEffect, useState } from "react";
import Usermsg from "./Usermsg"
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:5001";


function Chats() {

  let [input , setInput ] = useState("");
  let [msgColl , setMsgColl ] = useState([]);


    const socket = socketIOClient(ENDPOINT , {
      reconnectionDelay: 1000,
      reconnection:true,
      reconnectionAttempts: 10,
      transports: ['websocket'],
      agent: false, // [2] Please don't set this to true
      upgrade: false,
      rejectUnauthorized: false
    });


    
    const onSubmit = ()=>{
      // setMsgColl(preValue =>{
      //   return[
      //     input,
      //     ...preValue,
      //   ]
      // })
      socket.emit('message', input);

    
  }


    useEffect(()=>{
      socket.on('message', data=> setMsgColl(preValue =>{ return [  data , ...preValue ,] }))
    },msgColl);






    return (
        <>
            <div className="chatContainer ">
              <div className="chatbody">
                        
              {
                msgColl.map((msg)=>{
                return <Usermsg text = {msg} />
                  })
              }
              </div>
              <form onSubmit = {(e)=>{e.preventDefault() ; onSubmit() }}>   

                <input placeholder="Type a message" value = {input}  type="text"  onChange = { e => 
                  setInput(e.target.value) }  />

                <button style = {{border : 'none' , backgroundColor : 'transparent'}} type = "submit">
                  <i class="fa fa-paper-plane" aria-hidden="true"></i> 
                </button>
                
              </form>

            </div>
            </>
    )
}

export default Chats;