import React, { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom'
import queryString from 'query-string'
import io from 'socket.io-client'
const location=us
import './Chat.css'
function Chat({ location }) {
    useEffect(() => {
        // const data=queryString.parse(location)
        // console.log(location);
        console.log(location);
    })
    return (
        <h1>
            Chat
        </h1>
    )
}
export default Chat