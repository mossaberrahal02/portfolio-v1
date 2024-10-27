import React from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() 
{
  return (
    <div style={{ textAlign: 'center' }}>
      <Header/>
      <h1>Welcome to My Portfolio</h1>
      <p>This is a simple React application.</p>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
