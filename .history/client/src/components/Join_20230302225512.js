import React, {useState} from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

function Join(){
    const [name, setname]=useState('');
    const [room, setRoom]=useState('');
    return(<div className="Join"></div>)
}
export default Join