// src/App.js
import React from 'react';
import Nav from './inicio';
import Alerta from './alerta';
import Report from './report';
import './global.css';
import './suporte';
import Suporte from './suporte';
import Footer from './footer'



const App = () => {
  return (
    <div>
      <Nav />     
      <Alerta />
      <Report />
      <Report />
      <Report />
      <Report />
      <Report />
      <Suporte />
      <Footer />
    </div>


  );
};

export default App;
