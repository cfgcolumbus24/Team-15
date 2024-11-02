import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginFinal from './pages/login.tsx';
import Home from './pages/home.tsx';
import Option1 from './pages/option1.tsx'; // Import the components for each option
import Option2 from './pages/option2.tsx';
import Option3 from './pages/option3.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginFinal />} />
        <Route path="/home" element={<Home />} />
        <Route path="/option1" element={<Option1 />} />
        <Route path="/option2" element={<Option2 />} />
        <Route path="/option3" element={<Option3 />} />
      </Routes>
    </Router>
  );
}

export default App;



