import React from "react";
import './TextContainer.css'
function TextContainer({ users }) {
    if (users[0]) {
        const listOfUsers = users.map(user => <div key={user.id}>{user.name}</div>)
        return (
            <div>
                <h1>HELO</h1>
                {listOfUsers}
            </div>
        )
    }
    // if (users[0]) {
    //     const listOfUsers = users.map(user => <div key={user.id} className='activeItem'>{user.name}</div>)
    //     return (
    //         <div className="textContainer">
    //             <div>
    //                 <h1>People currently chatting: </h1>
    //                 <div className="activeContainer">
    //                     <h2>
    //                         {listOfUsers}
    //                         {/* <img alt="Online icon" src={}></img> */}
    //                     </h2>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
}
export default TextContainer