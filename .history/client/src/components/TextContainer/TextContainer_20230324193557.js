import React from "react";
import './TextContainer.css'
function TextContainer(users){
    // const listOfUsers=users.map(user=>user.name)
    if(users[0]){
        console.log(users);
    }
    return(
        <div>
            <h1>HELO</h1>
            {/* {listOfUsers} */}
        </div>    
    )
}
export default TextContainer