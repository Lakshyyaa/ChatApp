import React from "react";
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes></Routes>
        <Route path="ok" component={'s'}/>
        <Route path="gay" component={'s'}/>
    </div>
  );
}

export default App;
