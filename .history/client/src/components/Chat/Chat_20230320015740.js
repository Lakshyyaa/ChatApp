import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.css'


function Chat(){
    const location=useLocation()
    useEffect(() => {
        const {n}=queryString.parse(location.search);
        console.log(data)
    },[])
    return (
        <h1>
            Chat
        </h1>
    )
}
export default Chat