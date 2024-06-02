import React from 'react';
import './App.css';
import NavBar from './NavBar';
import About from './About';
import Portfolio from './Portfolio';
import Interests from './Interests';
import Projects from './Projects';
import Contact from "./Contact";
function App() {
  return (
    <div className="App">
      <div class="bg bg-img"></div>
      <NavBar />
      <About />
      <Portfolio />
      <Interests />
      <Projects />
      <Contact />
      <h3>Thank you for visiting.</h3>
      <p>Suraj Guduru  © 2024  All rights Reserved</p>
    </div>
  );
}

export default App;
