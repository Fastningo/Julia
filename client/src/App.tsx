import React from 'react';
import './App.css';
import Hello from './pages/Hello/Hello';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import No from './pages/No/No';
import Yes from './pages/Yes/Yes';
import Love from './pages/Love/Love';

function App() {
  return (
    <Router >
      <div className="App">
        <Routes>
          <Route path='/' element={<Hello />} />
          <Route path='/no' element={<No />} />
          <Route path='/yes' element={<Yes />} />
          <Route path='/love' element={<Love />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
