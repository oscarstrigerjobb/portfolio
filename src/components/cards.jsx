import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate  } from 'react-router-dom';
import styled from 'styled-components';
import data from '../assets/projekt.json'


const Cards = () => {
  const itemsToRender = data.slice(0, 3);//gör det möjligt att rendera ut färre cards att ha på display

  const navigate = useNavigate();

  const handleButtonClick = (id) => {//json id för att komma till korrekt sida som cardet man klickar på
    navigate(`/projektsida/${id}`);
  };
    return (
        <>
<div id="cards">
        <CardContainer><PageTitle>PROJEKT</PageTitle></CardContainer>
        <CardContainer>
             {itemsToRender.map(item => (
        <StyledCard key={item.id}>
          <StyledCardImage src={item.image} alt={item.title} />
          <StyledCardText dangerouslySetInnerHTML={{ __html: item.text }}></StyledCardText>
          <StyledCardButton onClick={() => handleButtonClick(item.id)}><p>Mer</p></StyledCardButton>
        </StyledCard>
      ))}

        </CardContainer>
        <CardContainer>
        <StyledLink to="/projekt"><StyledCardButton><p>Alla Projekt</p></StyledCardButton></StyledLink>
        </CardContainer>

        </div>

        </>
    );
};

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
export default Cards;
