import React, {useState} from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

function Join(){
    const [name, setname]=useState('');
    const [room, setRoom]=useState('');
    return(<div className="joinOuterContainer">
        <div className="joinInnerContainer">
            <h1 className="heading">Join</h1>
            <div><input placeholder="" className="joinInput" type={Text} onChange={setRoom}></input></div> 
            <div><input placeholder="" className="joinInput" type={Text} onChange={setRoom}></input></div> 
        </div>
    </div>)
}
export default Join