import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// css
import './App.css';

// components
import Navbar from './components/Navbar';

// pages
import Home from './pages/Home';
import Booking from './pages/Booking';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/booking" element={<Booking/>} />

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
