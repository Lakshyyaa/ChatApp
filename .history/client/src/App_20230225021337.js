import React from "react";
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="ok" component={'s'}/>
        <Route path="gay" component={'s'}/>
      </Routes>
    </div>
  );
}

export default App;
