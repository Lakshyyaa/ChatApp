import React from "react";
import './Input.css'
function Input() {
    return (
        <div className="form">
            <input 
            className="input"
            type="text"
            placeholder=""
            />
            <button></button>
        </div>
        // <input
        //     value={message}
        //     onChange={(event) => setMessage(event.target.value)}
        //     onKeyDown={(event) => event.key === 'Enter' ? sendMessage(event) : null}
        // />
    )
}
export default Input