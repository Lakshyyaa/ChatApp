import React from "react";
import './Messages.css'
import ScrollToBottom from 'react-scroll-to-bottom'
function Messages({messages, name}) {
    let listMessages=messages.map((message, i)=><div key={i}><Message message={message} name={name}/></div>)
    return (
        <ScrollToBottom>
            
        </ScrollToBottom>
    )
}
export default Messages