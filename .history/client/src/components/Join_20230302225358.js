import React, {useState} from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

function Join(){
    const [name, setname]=useState('');
    const [room, setRoom]=useState('');
    return(<h1>Join</h1>)
}
export default Join