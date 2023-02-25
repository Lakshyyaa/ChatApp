import React from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="ok" element />
          <Route path="gay" component={'s'} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
