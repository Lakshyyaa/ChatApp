import React from "react";
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom'
import Join from './'
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<h2>22</h2>} />
          <Route path="/chat" element={<h1>223</h1>} />
        </Routes>
    </Router>
  );
}

export default App;
