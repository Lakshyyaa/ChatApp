import React, {useState, useEffect} from "react";
import queryString from 'query-string'
import io from 'socket.io-client'

import './Chat.css'
function Chat() {
    const stringified = queryString.stringify({ foo: 'bar', abc: 'xyz' });
    console.log(stringified); //
    return (<h1>Chat</h1>)
}
export default Chat