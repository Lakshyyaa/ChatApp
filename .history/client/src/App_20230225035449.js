import React from "react";
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Link path="ok" element={<h2>22</h2>} />
          <Route path="gay" element={<h1>223</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
