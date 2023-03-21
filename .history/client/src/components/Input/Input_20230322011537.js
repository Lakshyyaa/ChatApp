import React from "react";
import './Input.css'
function Input() {
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
            <button></button>
        </div>
        // <input
            // value = { message }
    // onChange = {(event) => setMessage(event.target.value)
}
// onKeyDown = {(event) => event.key === 'Enter' ? sendMessage(event) : null}
        // />
    // )
// }
export default Input