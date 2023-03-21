import React from "react";
import './Input.css'
function Input({message, sendMessage, setMessage}) {
    return (
        <div className="form">
            <input
                className="input"
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyDown={(event) => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button className="sendButton"></button>
        </div>
    )
}
export default Input