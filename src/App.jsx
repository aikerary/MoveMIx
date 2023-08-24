import logo from './logo.svg';
import './css/App.css';
// Import please the useEffect and useState hooks from React, also fragment
import React, { useEffect, useState, Fragment } from 'react';

function App() {
  return (
    <header>
      <h1>
        {Array.from("Movemix").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h1>
    </header>
  );
}

export default App;
