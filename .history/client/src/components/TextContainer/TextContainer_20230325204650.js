import React from "react";
import './TextContainer.css'
function TextContainer({ users }) {
    if (users[0]) {
        const listOfUsers = users.map(user => <div key={user.id} className='activeItem'>{user.name}</div>)
        return (
            <div>
                {/* <h1>HELO</h1>
                {listOfUsers} */}
                <h1>People currently chatting: </h1>
                <div className="activeContainer">
                    <h2>
                        {listOfUsers}
                        <img alt="Online icon" src=""></img>
                    </h2>
                </div>
            </div>
        )
    }
    return (
        <div className="textContainer">
            {/* {
                users[0]
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
            } */}
        </div>
    )
}
export default TextContainer