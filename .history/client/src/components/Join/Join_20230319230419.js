import React, { useState } from "react";
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom'
import './Join.css'

function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div>
                    <Link />
                    <input
                        placeholder="Name"
                        className="joinInput"
                        type="text"
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <input placeholder="Room"
                        className="joinInput mt-20"
                        type="text" onChange={(event) => setRoom(event.target.value)}
                    />
                </div>
                <Link onClick={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button" type="submit">Submit</button>
                </Link>
            </div>
        </div>
    )
}
export default Join 