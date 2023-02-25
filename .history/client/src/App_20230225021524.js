import React from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="ok" element />
          <Route path="gay" element />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
