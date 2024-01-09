import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/pages";
import React, { useState } from 'react'
import Gallery from "./components/pages/gallery";
import Team from './components/pages/team';
import Aim from './components/pages/Aim';
import Alumni from "./components/pages/alumni"
import Footer from "./components/Footer";
import About from "./components/pages/about";
import Vision from "./components/pages/vision";
import Sponsor from "./components/pages/sponsor";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Router>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/team" element={<Team />} />
                <Route path="/Aim" element={<Aim />} />
                <Route path="/supporters" element={<Alumni />} />
                <Route path="/sponsor" element={<Sponsor />} />
                <Route path="/about" element={<About />} />
                <Route path="/vision" element={<Vision />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

/*import { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
//import Home from './components/pages/Home';
import Gallery from './components/pages/gallery';
import Team from './components/pages/team';
import Aim from './components/pages/Aim';
import Alumni from './components/pages/alumni';
import Footer from './components/Footer';
import About from './components/pages/about';
import Vision from './components/pages/vision';

import CustomCursor from './components/CustomCursor';
import useLocoScroll from './hooks/useLocoScroll.js';

import './App.css';

function App() {
  const [preloader, setPreload] = useState='true';
  const [isOpen, setIsOpen] = useState='false';
  const ref = useRef(null);

  useLocoScroll(!preloader);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [timer, setTimer] = useState(3);
  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload='false';
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  useEffect(() => {
    setTimeout(() => {
      setPreload='false';
    }, 3000);
  }, []);

  return (
    <>
      <CustomCursor />
      {preloader ? (
        <div className="loader-wrapper absolute" />
      ) : (
        <div className="main-container" id="main-container" data-scroll-container ref={ref}>
          <Router>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Routes>
              <Route path="/App" element={<App />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/team" element={<Team />} />
              <Route path="/aim" element={<Aim />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/supporters" element={<Alumni />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;*/