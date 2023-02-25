import React from "react";
import {BrowserRouter as Router, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="ok"/>
        <Route path="gay"/>
      </Router>
    </div>
  );
}

export default App;
