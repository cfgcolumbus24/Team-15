import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginFinal from './pages/login.tsx';
import Home from './pages/home.tsx';
import Demographics from './pages/demographics.tsx';
import Patients from './pages/users.tsx';
import Patient from './pages/patient.tsx';
import Financials from './pages/financials.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginFinal />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Patients" element={<Patients />} />
        <Route path="/patient/:patientName" element={<Patient />} />
        <Route path="/demographics" element={<Demographics />} />
        <Route path="/financials" element={<Financials />} />
      </Routes>
    </Router>
  );
}

export default App;