import React from "react";
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Routes path="ok" element={<h2>22</h2>} />
        <Routes path="gay" element={<h1>223</h1>} />
      </Routes>
    </div>
  );
}

export default App;