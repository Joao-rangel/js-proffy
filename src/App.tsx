import React from 'react';

import Landing from './pages/Landing' /* obrigatório caminho rel. para criações próprias */

import './assets/styles/global.css';
import { Route } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

export default App;
