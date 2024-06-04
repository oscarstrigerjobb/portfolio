import React, { useState } from 'react'
//import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Om = () => {
    return (
        <>
<div id="om">
<Container><PageTitle>OM MIG</PageTitle></Container>

<Container>
        <OmMigDiv>
            <OmMigImage src="/Untitled.png"></OmMigImage>
            <OmMigHeader>Hej jag är Oscar</OmMigHeader>

            <OmMigText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</OmMigText>
            <OmMigText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</OmMigText>
        </OmMigDiv>

</Container>
</div>
        </>
    );
};


const Container = styled.div`
 display: flex;
    justify-content: center;
    align-items: center;
  margin-bottom: 62px;
  position: relative;
  top: 10vh;

`
const PageTitle = styled.h1`
    color: #57A64A;
    font-family: "Orbitron";
    font-weight: 700;//Regular 400,Medium 500,SemiBold 600,Bold 700,ExtraBold 800,Black 900
    margin: 0;
`
const OmMigDiv = styled.div`
    width: 1000px;
    height: 650px;
    background-color: #121212;
    border: 2px solid #57A64A;
    overflow: auto;
    @media (max-width: 1024px) {
        width: 800px;
        height: auto;
    }

    @media (max-width: 768px) {
        width: 600px;
        height: auto;
    }
    @media (max-width: 480px) {
        width: 90%;
        height: auto;
    }
`
const OmMigHeader = styled.h1`
    color: #ffffff;
    font-family: "Orbitron";
    font-weight: 600;//Regular 400,Medium 500,SemiBold 600,Bold 700,ExtraBold 800,Black 900
    font-size: 28px;
    text-align: center;
    margin-top: 70px;
    margin-bottom: 50px;

    @media (max-width: 768px) {
        font-size: 24px;
        margin-top: 50px;
        margin-bottom: 30px;
    }

    @media (max-width: 480px) {
        font-size: 20px;
        margin-top: 30px;
        margin-bottom: 20px;
    }
`
const OmMigImage = styled.img`
    width: 400px;
    height: 400px;
    background-color: aliceblue;
    border: 2px solid #57A64A;
    border-radius: 50%;
    float: right;
    margin: 15px 15px 15px 20px;

    @media (max-width: 1024px) {
        width: 300px;
        height: 300px;


    }

    @media (max-width: 768px) {
        width: 200px;
        height: 200px;
        //float: none;
        margin: 15px auto;
    }

    @media (max-width: 480px) {
        width: 100%;
        height: auto;
        //float: none;
        margin: 15px auto;
    }
`
const OmMigText = styled.p`
    color: #ffffff;
    font-family: "Orbitron";
    font-weight: 500;//Regular 400,Medium 500,SemiBold 600,Bold 700,ExtraBold 800,Black 900
    font-size: 20px;
    //text-align: center;
    margin-left: 20px;
    margin-top: 30px;
    margin-right: 20px;

    @media (max-width: 768px) {
        font-size: 18px;
        margin-left: 15px;
        margin-top: 20px;
        margin-right: 15px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
        margin-left: 10px;
        margin-top: 10px;
        margin-right: 10px;
    }
`
export default Om;
