import React from 'react'
import GlobalStyles from '../src/styles/GlobalStyles'
import Routes from './routes'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <Header />
    <Routes />
    <GlobalStyles />
  </BrowserRouter>
  );
}

export default App;
