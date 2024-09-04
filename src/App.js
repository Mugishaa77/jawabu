import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// css
import './App.css';

// components
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />

    <Routes>
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
