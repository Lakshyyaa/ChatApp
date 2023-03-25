import React from "react";
import './TextContainer.css'
function TextContainer({ users }) {
    if (users[0]) {
        return (
            <div>
                <h1>HELO</h1>
                {listOfUsers}
            </div>
        )
    }

    return (
        null
    )
}
export default TextContainer