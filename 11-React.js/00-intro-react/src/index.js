//jshint esversion:6

// this is how to import external modules on common javascript 
// if you use require as on node.js (javascript ES6), 
// you can have problems in some older browsers
// this happens similarly on export 
import React from 'react';
import ReactDOM from 'react-dom';

// importing React/JSX App
import App from "./components/App";

// <App/> refers to a React JSX Component called App
ReactDOM.render( 
  <div>
    <App />    
  </div>,
  document.getElementById('root')
);

// React / JSX Style Guide
// https://github.com/airbnb/javascript/tree/master/react