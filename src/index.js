import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar';
import Rule from './components/rule'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <Navbar />
  <Rule/>
  </div>
);