import logo from './logo.svg';
import './css/App.css';
import Dashboard from './Dashboard';
// Import please the useEffect and useState hooks from React, also fragment
import React, { Fragment, useEffect, useState} from 'react';

function App() {
  return (
    <Fragment>
    <header>
      <h1>
        {Array.from("Movemix").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h1>
    </header>
   <div><Dashboard /></div>
    </Fragment>
  );
}

export default App;
