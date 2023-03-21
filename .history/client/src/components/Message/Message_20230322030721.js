import React from "react";
import './Message.css'
function Message({ message, name }) {
    let isSentByCurrentUser = false
    const trimmedName = name.trim().toLowerCase();
    if (message.user === trimmedName) {
        isSentByCurrentUser = true;
    }
    return (
        isSentByCurrentUser ? (
            <div className="messageContainer justifyEnd">
                <p className="sentText">{trimmedName}</p>
                <div className="messageBox">
                    <p className="messageText">{message.text}</p>
                </div>
            </div>
        ) :
            (
                <div className="messageContainer">
                    <p className="sentText">{trimmedName}</p>
                    <div className="messageBox">
                        <p className="messageText">{message.text}</p>
                    </div>
                </div>
            )
    )
}
export default Message