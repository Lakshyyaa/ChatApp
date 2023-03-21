import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.css'
import Input from "../Input/Input.js";
import InfoBar from "../InfoBar/InfoBar.js";
import Messages from "../Messages/Messages";
let socket;

function Chat() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState([])
    const location = useLocation()
    const ENDPOINT = 'localhost:5000';
    useEffect(() => {
        socket = io(ENDPOINT)
        const { name, room } = queryString.parse(location.search);
        setName(name)
        setRoom(room)

        socket.emit('join', { name, room }, () => { })
        return (() => {
            socket.emit('disconnect')
            socket.off()
        })
    }, [ENDPOINT, location.search])
    useEffect(() => {
        socket.on('message', (message, callback) => {
            setMessages([...messages, message]);
        })
        console.log(messages)
    }, [messages])
    const sendMessage = (event) => {
        event.preventDefault()
        if (message) {
            socket.emit('sendMessage', message, () => { setMessage('') })
        }
    }
    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}
export default Chat