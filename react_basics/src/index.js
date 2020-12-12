// Inbuild Modules
// 1. React Functionalities which deals with your http modules, React based functionalities
import React from 'react';

// 2. ReactDOM is <p></p> <h1></h1> -> JSX Element -> JavaScriptXML 
import ReactDOM from 'react-dom';


// Some Additional JS File called App.js
import App from './App.js';

ReactDOM.render(
    <App />, // JSX Tag -> 1st Parameter
  document.getElementById('root') // document.getElementByID('root') => 2nd Parameter
);


