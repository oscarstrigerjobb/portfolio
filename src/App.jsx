import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

import styled from 'styled-components'
import Navbar from './components/navbar'
import Header from './components/header'
import Cards from './components/cards'
import Om from './components/ommig'
import Kontakt from './components/kontakt'
import Projekt from './pages/projekt'
import ProjektSida from './pages/projektsida'
import ColorChanger from './components/colorChanger';

function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {//funktionen kollar om det finns en #, om det finns så försöker den att hitta det med document.querySelector(hash) om den hittar elementet så scrollas man till elementet, om inte så går den tillbaka till toppen av sidan, #en finns i navbar.jsx
      const hash = location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    scrollToHash();
  }, [location]);//så fort location ändras så körs funktionen


  return (
    <>
      <Header ></Header>
      <Navbar />
      <div id="start">
      <WelcomeMessage>Välkommen</WelcomeMessage>
</div>
      <Divider1 />
      <Cards />
      <Divider2 />
      <Om />
      <Divider3 />
      <Kontakt />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/projekt" element={<Projekt />} />
        <Route path="/projektsida/:id" element={<ProjektSida />} />
      </Routes>
    </Router>
  );
}

const WelcomeMessage = styled.h1`
  color: white;
  font-family: "Orbitron";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Divider1 = styled.hr`
  color: #57A64A;
  border-top: 4px;
  border-left: 0px;
  border-right: 0px;
  border-style: solid;
  position: relative;
  //top: 100vh;  // Presis under synliga viewporten
  width: 100%;
  margin: 0 0 0 0;  //padding: 0;
`
const Divider2 = styled.hr`
  color: #57A64A;
  border-top: 4px;
  border-left: 0px;
  border-right: 0px;
  border-style: solid;
  position: relative;
  //top: 205vh;
  width: 100%;
  margin: 20vh 0 0 0;  //padding: 0;
`
const Divider3 = styled.hr`
  color: #57A64A;
  border-top: 4px;
  border-left: 0px;
  border-right: 0px;
  border-style: solid;
  position: relative;
  //top: 305vh;
  width: 100%;
  margin: 21vh 0 0 0;
  //padding: 0;
`

export default App;
