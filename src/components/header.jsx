import React, { useState } from 'react'
//import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ColorChanger from './colorChanger';

const Header = () => {
    return (
        <HeaderDiv>
            <ColorChanger></ColorChanger>
        </HeaderDiv>
    );
};

const HeaderDiv = styled.div`
    margin: auto;
    border-color: #57a64a;
    border-width: 4px 0px 4px 0px;
    border-style: solid;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: fixed;
    z-index: 10000;
    background-color: #121212;
`;

// const PageTitle = styled.h1`
//     color: #57a64a;
//     font-family: "Orbitron";
//     font-weight: 700;//Regular 400,Medium 500,SemiBold 600,Bold 700,ExtraBold 800,Black 900
//     margin: 0;
//     z-index: 100001;
// `;
export default Header;
