import React from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home }  from './pages/home';
import { Login } from './pages/login';

import GlobalStyle from './GlobalStyle';
import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

function App() {
  
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Login', href: '/login' },
  ];

  return (
    <Router>      
      <GlobalStyle />
      <MainContainer>
        <Navbar links={links} logo={"/logo192.png"} />
        <Wrapper >        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Wrapper >        
        <Footer logo={"/logo192.png"} />
      </MainContainer>
    </Router>
  );
}

export default App;
