import React from "react";
import './TextContainer.css'
import closeIcon from "../../Icons/closeIcon.png"
import onlineIcon from "../../Icons/onlineIcon.png"
function TextContainer({ users }) {
    if (users[0]) {
        const listOfUsers = users.map(user => <div key={user.id} className='activeItem'>{user.name}   <img alt="Online icon" src={onlineIcon}></img></div>)
        return (
            <div className="textContainer">
                <div>
                    <h1>People currently chatting: </h1>
                    {/* <div className="activeContainer">
                        <h2>
                            {listOfUsers}
                            <img alt="Online icon" src={onlineIcon}></img>
                        </h2>
                    </div> */}
                    {listOfUsers}
                </div>
            </div>
        )
    }
}
export default TextContainer