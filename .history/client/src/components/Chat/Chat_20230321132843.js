import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.css'
let socket;
// emitting join, disconnect, sendMessage
// handling 
function Chat() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState([])
    const location = useLocation()
    const ENDPOINT = 'localhost:5000';
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        setName(name)
        setRoom(room)
        socket = io(ENDPOINT)
        socket.emit('join', { name, room }, () => {
        })
        return (() => {
            socket.emit('disconnect')
            socket.off()
        })
    }, [ENDPOINT, location.search])
    useEffect(() => {
        socket.on('message', (message, callback) => {
            setMessages([...messages, message]);
        })
    }, [messages])
    function sendMessage(event){
        if(message){
            socket.emit('sendMessage', )
        }
    }
    return (
        <div className="outerContainer">
            <div className="container">
                <input
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyDown={(event) => event.key === 'Enter' ? sendMessage(event) : null}
                />
            </div>
        </div>
    )
}
export default Chat