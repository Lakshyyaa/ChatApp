import React, { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (<div className="joinOuterContainer">
        <div className="joinInnerContainer">
            <h1 className="heading">Join</h1>
            <div><input placeholder="" className="joinInput" type={Text} onChange={(event) => setName(event.target.value)} /></div>
            <div><input placeholder="" className="joinInput mt-20" type={Text} onChange={(event) => setRoom(event.target.value)} /></div>
            <Router >
                
            </Router>
        </div>
    </div>)
}
export default Join