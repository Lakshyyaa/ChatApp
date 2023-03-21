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
                <p className="sentText">{trimmedName}</p>
                <div>
                    <p className="messageText"></p>
                </div>
            </div>
        ):
        (

        )
    )
}
export default Message