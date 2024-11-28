// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'; // Ensure you have appropriate CSS or Tailwind CSS included
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import About from "./component/About";
import Experience from "./component/Experience";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <About/>
        <Experience/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
