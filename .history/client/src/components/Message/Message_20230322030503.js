import React from "react";
import './Message.css'
function Message({message, name}){
    let isSentByCurrentUser=false
    const trimmedName=name.trim().toLowerCase();
    if(user===trimmedName){
        isSentByCurrentUser=true;
    }
    return(
        isSentByCurrentUser?(
            <div className="messageContainer">
                <p className="sentText">{</p>
            </div>
        ):
        (

        )
    )
}
export default Message