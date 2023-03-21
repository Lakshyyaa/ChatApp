import React from "react";
import './Messages.css'
import ScrollToBottom from 'react-scroll-to-bottom'
function Messages({messages}) {
    let listMessages=messages.map((mess)=><div key={}></div>)
    return (
        <ScrollToBottom>
            
        </ScrollToBottom>
    )
}
export default Messages