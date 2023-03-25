import React from "react";
import { use } from "../../../../server/router";
import './TextContainer.css'
function TextContainer({users}){
    // const listOfUsers=users.map(user=>user.user.name)
    if(users){
        
    }
    console.log(users);
    return(
        <div>
            <h1>HELO</h1>
            {/* {listOfUsers} */}
        </div>    
    )
}
export default TextContainer