import React from "react";
import './TextContainer.css'
function TextContainer(users){
    const listOfUsers=users.map(user=>user.name)
    console.log(users.users);
    return(
        <div>
            <h1>HELO</h1>
            {/* {listOfUsers} */}
        </div>    
    )
}
export default TextContainer