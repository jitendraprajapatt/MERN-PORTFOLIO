import React from 'react'
import './App.css' ;
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Middle/Home';
import About from './Components/Middle/About';
import Projects from './Components/Middle/Projects';
import Contact from './Components/Middle/Contact';
import Navbar from './Components/Header';
import Footer from './Components/Footer'


function App() {
  const currentYr = new Date().getFullYear();

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/About' element={<About />} />
        <Route exact path='/Projects' element={<Projects />} />
        <Route exact path='/Contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
