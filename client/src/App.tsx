import React from 'react';
import './App.css';
import Hello from './pages/Hello/Hello';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import No from './pages/No/No';
import Yes from './pages/Yes/Yes';

function App() {
  return (
    <Router >
      <div className="App">
        <Routes>
          <Route path='/' element={<Hello />} />
          <Route path='/no' element={<No />} />
          <Route path='/yes' element={<Yes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
