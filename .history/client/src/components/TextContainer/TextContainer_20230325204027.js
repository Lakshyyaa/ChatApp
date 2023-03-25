import React from "react";
import './TextContainer.css'
function TextContainer({ users }) {
    // if (users[0]) {
    //     const listOfUsers = users.map(user => <h1 key={user.id}>{user.name}</h1>)
    //     return (
    //         <div>
    //             <h1>HELO</h1>
    //             {listOfUsers}
    //         </div>
    //     )
    // }
    <div className="textContainer">
        <div>
            <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
            <h2>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
            <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
        </div>
        {
            users
                ? (
                    <div>
                        <h1>People currently chatting:</h1>
                        <div className="activeContainer">
                            <h2>
                                {users.map(({ name }) => (
                                    <div key={name} className="activeItem">
                                        {name}
                                        <img alt="Online Icon" src={onlineIcon} />
                                    </div>
                                ))}
                            </h2>
                        </div>
                    </div>
                )
                : null
        }
    </div>
}
export default TextContainer