import React from "react";
import './Messages.css'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from "../Message/Message";
function Messages({messages, name}) {
    let listMessages=messages.map((message, i)=><div key={i}><Message message={message} name={name}/></div>)
    return (
        <ScrollToBottom className="messages">
            {listMessages}
        </ScrollToBottom>
    )
}
export default Messages