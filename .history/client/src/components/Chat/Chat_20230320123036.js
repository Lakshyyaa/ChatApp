import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.css'
let socket;

function Chat(){
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const location=useLocation()
    useEffect(() => {
        const {name, room}=queryString.parse(location.search);
        setName(name)
        setRoom(room)
        socket = io('http://localhost:3000')
        console.log(socket)
    },[])
    return (
        <h1>
            Chat
        </h1>
    )
}
export default Chat