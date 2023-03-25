import React from "react";
import './TextContainer.css'
function TextContainer({users}){
    // const listOfUsers=users.map(user=>user.user.name)
    if(users[0]){
        console.log(users);   
    }
    return(
        {users[0]? } 
    )
}
export default TextContainer