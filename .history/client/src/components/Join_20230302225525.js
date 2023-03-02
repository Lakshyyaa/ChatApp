import React, {useState} from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

function Join(){
    const [name, setname]=useState('');
    const [room, setRoom]=useState('');
    return(<div className="joinOuterContainer">
        <div></div>
    </div>)
}
export default Join