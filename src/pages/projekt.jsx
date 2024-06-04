import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

import '../App.css'
import styled from 'styled-components'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Kontakt from '../components/kontakt'
//import Cards from '../components/cards'
import data from '../assets/projekt.json'

function Projekt() {
  const ScrollToTop = () => {//gör så att man scrollas till toppen av sidan när man navigerar sig in på den
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const navigate = useNavigate();

const handleButtonClick = (id) => {//id från json
  navigate(`/projektsida/${id}`);
};

  return (
    <>
      <Header/>
      <Navbar/>

      <CardContainer><PageTitle>PROJEKT</PageTitle></CardContainer>

        <CardContainer>
        {data.map(item => (//renderar ut data ifrån json
        <StyledCard key={item.id}>
          <StyledCardImage src={item.image} alt={item.title} />
          {/* dangerouslySetInnerHTML gör så att man kan använda sig av html taggar ifrån jsonformatet */}
          <StyledCardText dangerouslySetInnerHTML={{ __html: item.text }}></StyledCardText>
          <StyledCardButton onClick={() => handleButtonClick(item.id)}><p>Mer</p></StyledCardButton>
        </StyledCard>
      ))}

        </CardContainer>

  <Divider1></Divider1>
  <Kontakt></Kontakt>
  <ScrollToTop></ScrollToTop>
    </>
  )
}


const Divider1 = styled.hr`
  color: #57A64A;
  border-top: 4px;
  border-left: 0px;
  border-right: 0px;
  border-style: solid;
  position: relative;
  //top: 100vh;  // Presis under synliga viewporten
  width: 100%;
  margin: 20vh 0 0 0;
  //padding: 0;
`
const CardContainer = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
  margin-bottom: 62px;
  position: relative;
  top: 10vh;
  flex-wrap: wrap;
`
const PageTitle = styled.h1`
  color: #57A64A;
    font-family: "Orbitron";
    font-weight: 700;//Regular 400,Medium 500,SemiBold 600,Bold 700,ExtraBold 800,Black 900
    margin: 0;
`
const StyledCard = styled.div`
  width: 400px;
  height: 600px;
  border-style: solid;
  border-color: #57A64A;
  border-radius: 10px;
  border-width: 2px;
  margin: 13px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  align-items: center;
  overflow: hidden;

`

const StyledCardImage = styled.img`
 width: 90%;
 height: 300px;
 background-color: white;
 border-style: solid;
  border-color: #57A64A;
  border-radius: 10px;
  border-width: 2px;
  margin: 20px 20px 0px 20px;

`
const StyledCardText = styled.p`
 color: white;
 font-family: "Orbitron", sans-serif;
 overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
`
const StyledCardButton = styled.button`
 width: 216px;
 height: 58px;
 background-color: #57A64A;
 border-radius: 10px;
 border-style: none;
 cursor: pointer;
 margin-bottom: 8px;


  p{
    font-size: 22px;
    color: white;
    text-align: center;
    margin: 0;
    font-family: "Orbitron", sans-serif;

  }

`
const StyledLink = styled(Link)`
  text-decoration: none;
`;
export default Projekt;
