import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams  } from 'react-router-dom';

import '../App.css'
import styled from 'styled-components'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Kontakt from '../components/kontakt'
//import Cards from '../components/cards'
import data from '../assets/projekt.json'

function ProjektSida() {
  const ScrollToTop = () => {//gör så att man scrollas till toppen av sidan när man navigerar sig in på den
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

//renderar med hjälp av id och json rätt information
const { id } = useParams();
  const item = data.find(item => item.id === parseInt(id));

  if (!item) {
    return <p>Item not found</p>;
  }
  return (
    <>
      <Header/>
      <Navbar/>

<CardContainer>
<StyledNavDiv><StyledLink to="/projekt"><StyledNavDivText><svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 18L30 0.679489L30 35.3205L0 18Z" fill="#57A64A"/>
</svg> Projekt/{item.title}</StyledNavDivText></StyledLink></StyledNavDiv>

  <StyledDiv>

    <StyledDivImage src={item.image} alt={item.title}></StyledDivImage>
    <DivTitle>{item.title}</DivTitle>

    <StyledDivText dangerouslySetInnerHTML={{ __html: item.text }}></StyledDivText>{/* dangerouslySetInnerHTML tillåter mig att använda mig av htmltaggar från jsonfilen (farligt att använda pga cross-site scripting attacker)*/}
  </StyledDiv>
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

  @media (max-width: 1100px) {
    top: 5vh;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    top: 5vh;
  }

  @media (max-width: 480px) {
    top: 2vh;
    flex-direction: column;
  }
`
const DivTitle = styled.h1`
  color: #ffffff;
    font-family: "Orbitron";
    font-weight: 700;//Regular 400,Medium 500,SemiBold 600,Bold 700,ExtraBold 800,Black 900
    margin-top: 50px;
    margin-left: 20px;
    align-self: flex-start;

  @media (max-width: 1100px) {
    font-size: 26px;
    margin-top: 40px;
    margin-left: 15px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    margin-top: 30px;
    margin-left: 10px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-top: 20px;
    margin-left: 5px;
  }
`
const StyledDiv = styled.div`
  width: 1000px;
  height: 100%;
  border-style: solid;
  border-color: #57A64A;
  //border-radius: 10px;
  border-width: 2px;
  margin: 13px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  align-items: center;

  @media (max-width: 1100px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 90%;
    margin: 5px;
  }

`
const StyledNavDiv = styled.div`
  width: 1000px;
  height: 100%;

  //border-radius: 10px;
  border-width: 2px;
  margin: 0;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  align-items: center;

  @media (max-width: 1100px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    margin-top: 60px;
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const StyledNavDivText = styled.p`

  color: #57A64A;
  font-family: "Orbitron", sans-serif;
  font-weight: 600;
  font-size: 30px;
  margin: 0;
  margin-bottom: 0px;

  @media (max-width: 1100px) {
    font-size: 26px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`

const StyledDivImage = styled.img`
  width: 968px;
  height: auto;
  background-color: white;
  border-style: solid;
  border-color: #57A64A;
  border-width: 2px;
  margin: 20px 20px 0px 20px;

  @media (max-width: 1100px) {
    width: 90%;

  }
  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 0px 10px 0px 10px;
  }
`
const StyledDivText = styled.p`
  color: white;
  font-family: "Orbitron", sans-serif;
  font-weight: 500;
  font-size: 20px;
  margin-left: 20px;
  margin-bottom: 40px;

  @media (max-width: 1100px) {
    font-size: 18px;
    margin-left: 15px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    margin-left: 10px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-left: 5px;
  }
`

export default ProjektSida;
