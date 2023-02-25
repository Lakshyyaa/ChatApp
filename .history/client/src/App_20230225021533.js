import React from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="ok" element={<h2></h2>} />
          <Route path="gay" element={<h1></h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
