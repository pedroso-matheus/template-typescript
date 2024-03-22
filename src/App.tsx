import React from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home }  from './pages/home';
import { Login } from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
