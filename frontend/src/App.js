import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginFinal from './pages/login.tsx';
import Home from './pages/home.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginFinal />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;


