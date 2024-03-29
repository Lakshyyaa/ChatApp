import React from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Join/>} />
          <Route path="/chat" element={<Chat location={useLocatio}/>} />
        </Routes>
    </Router>
  );
}

export default App;
