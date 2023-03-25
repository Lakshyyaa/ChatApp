import React from "react";
import './TextContainer.css'
function TextContainer({users}){
    // const listOfUsers=users.map(user=>user.user.name)
    if(users[0]){
        console.log(users);   
    }
    return(
        { users[0]? <div>< h1 > HELO</h1></div >:<div>ok</div>} 
    )
}
export default TextContainer