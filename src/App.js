import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// css
import './App.css';

// components
import Navbar from './components/Navbar';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home/>} />

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
