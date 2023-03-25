import React from "react";
import './TextContainer.css'
function TextContainer({ users }) {
    if (users[0]) {
        const listOfUsers = users.map(user => user.name)
        return (
            <div>
                <h1>HELO</h1>
                {listOfUsers}
            </div>
        )
    }
}
export default TextContainer