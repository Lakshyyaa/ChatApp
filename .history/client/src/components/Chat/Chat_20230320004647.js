import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.css'


const Chat = ({location}) => {
    useEffect(() => {
        console.log(location)
    })
    return (
        <h1>
            Chat
        </h1>
    )
}
export default Chat