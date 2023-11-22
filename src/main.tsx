/*import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");


  
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

*/
import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
if(rootElement){
  createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);
}else {
  console.error("Element with ID 'root' not found")
}


