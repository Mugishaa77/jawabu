import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// css
import './App.css';

// components
import Navbar from './components/Navbar';

// pages
import Home from './pages/Home';
import Booking from './pages/Booking';
import About from './pages/About';
import ServicesComponent from './pages/ServicesComponent';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/booking" element={<Booking/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<ServicesComponent />} />
      <Route path="/contact" element={<Contact/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
