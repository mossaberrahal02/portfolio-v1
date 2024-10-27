import React from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header/>
      <h1>Welcome to My Portfolio</h1>
      <p>This is a simple React application.</p>
      <Projects/>
    </div>
  );
}

export default App;
