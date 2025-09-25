import React from 'react';
import './App.css';
import Header from './components/header.jsx'; // Properly import the Header component

function App() {
  return (
    <>
      <Header />
     <main className="container-fluid hero-section">
        <h1>Welcome to <span className="highlight">Hanubridge</span></h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim cupiditate fugit ab corrupti 
          aliquam iste aliquid in vitae eos cumque doloribus magni perspiciatis saepe, magnam adipisci 
          numquam dicta ea animi.
        </p>
      </main>
    </>
  );
}

export default App;
