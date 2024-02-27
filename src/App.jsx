import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/pages";
import React, { useEffect, useState, useRef } from "react";
import Gallery from "./components/pages/gallery";
import Team from './components/pages/team';
import Aim from './components/pages/Aim';
import Alumni from "./components/pages/alumni"
import Footer from "./components/Footer";
import About from "./components/pages/about";
import GetInvolved from "./components/pages/getinvolved";
import Testimonial from "./components/pages/testimonials";
import { useLocation } from 'react-router-dom';


import DedicationEvent from "./components/pages/events/dedication";
import CoastalPoliceEvent from "./components/pages/events/coastalpolice";
import Dirts2023Event from "./components/pages/events/dirts2023";
import IinventivEvent from "./components/pages/events/iinventiv";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
}

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const targetDivRef = useRef(null);

    const scrollToTarget = () => {
      targetDivRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Router>
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} scrollToTarget={scrollToTarget}/>
            <Routes>
                <Route path="/" element={<Home targetDivRef={targetDivRef} />} />
                <Route  path="/gallery" element={<Gallery />} />
                <Route  path="/team" element={<Team />} />
                <Route  path="/Aim" element={<Aim />} />
                <Route  path="/supporters" element={<Alumni />} />
                <Route  path="/getinvolved" element={<GetInvolved />} />
                <Route  path="/about" element={<About />} />
                <Route  path="/testimonials" element={<Testimonial />} />

                <Route path="/events/dedication" element={<DedicationEvent />} />
                <Route path="/events/coastalpolice" element={<CoastalPoliceEvent />} />
                <Route path="/events/dirts2023" element={<Dirts2023Event />} />
                <Route path="/events/iinventiv" element={<IinventivEvent />} />
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