import React from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Join from './components/Join';
import Chat from './components/Chat';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact component={<Join/>} />
          <Route path="/chat" element={<Chat/>} />
        </Routes>
    </Router>
  );
}

export default App;
