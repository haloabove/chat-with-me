import React from 'react';
import Home from './views/Home.tsx';
import LogIn from './views/LogIn.tsx';
import NoPage from './views/NoPage.tsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
     <div className='App'>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
