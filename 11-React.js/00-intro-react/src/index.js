//jshint esversion:6

import React from 'react';
import ReactDOM from 'react-dom';

// importing React/JSX App
import App from "./App";

// <App/> refers to a React JSX Component called App
ReactDOM.render( 
  <div>
    <App />    
  </div>,
  document.getElementById('root')
);

// React / JSX Style Guide
// https://github.com/airbnb/javascript/tree/master/react