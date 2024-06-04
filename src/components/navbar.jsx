import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components'
import '../App.css'

import Cards from './cards'
import Om from './ommig'
import Kontakt from './kontakt'
import Projekt from '../pages/projekt'
const Navbar = () => {

    return (
        <NavContainer>
            <Link to="/#start">
            <IconButton>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="42" height="42" rx="10" stroke="#57A64A" strokeWidth="2"/>
            <path d="M33.875 15.594V6.1875H27.9375V10.5256L22 5L3 22.8125H7.75V38.25H18.4375V26.375H25.5625V38.25H36.25V22.8125H41L33.875 15.594Z" fill="#57A64A"/>
            </svg>
            </IconButton>
            </Link>
            <Link to='/#cards'>
            <IconButton>
            <svg width="44" height="44" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="40" height="40" rx="9" stroke="#57A64A" strokeWidth="2"/>
            <path d="M8.2 36.4C7.32 36.4 6.56693 36.0869 5.9408 35.4608C5.31467 34.8347 5.00107 34.0811 5 33.2V15.6C5 14.72 5.3136 13.9669 5.9408 13.3408C6.568 12.7147 7.32107 12.4011 8.2 12.4H14.6V9.2C14.6 8.32 14.9136 7.56693 15.5408 6.9408C16.168 6.31467 16.9211 6.00107 17.8 6H24.2C25.08 6 25.8336 6.3136 26.4608 6.9408C27.088 7.568 27.4011 8.32107 27.4 9.2V12.4H33.8C34.68 12.4 35.4336 12.7136 36.0608 13.3408C36.688 13.968 37.0011 14.7211 37 15.6V33.2C37 34.08 36.6869 34.8336 36.0608 35.4608C35.4347 36.088 34.6811 36.4011 33.8 36.4H8.2ZM17.8 12.4H24.2V9.2H17.8V12.4Z" fill="#57A64A"/>
            </svg>
            </IconButton>
            </Link>
            <Link to="/#om">
            <IconButton>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="42" height="42" rx="10" stroke="#57A64A" strokeWidth="2"/>
            <path d="M31.12 22.68C32.2021 22.68 33.2398 23.1099 34.005 23.875C34.7701 24.6402 35.2 25.6779 35.2 26.76V28.12C35.2 33.4811 30.1408 39 21.6 39C13.0592 39 8 33.4811 8 28.12V26.76C8 25.6779 8.42986 24.6402 9.195 23.875C9.96015 23.1099 10.9979 22.68 12.08 22.68H31.12ZM21.6 5C23.5838 5 25.4864 5.78807 26.8892 7.19084C28.2919 8.59361 29.08 10.4962 29.08 12.48C29.08 14.4638 28.2919 16.3664 26.8892 17.7692C25.4864 19.1719 23.5838 19.96 21.6 19.96C19.6162 19.96 17.7136 19.1719 16.3108 17.7692C14.9081 16.3664 14.12 14.4638 14.12 12.48C14.12 10.4962 14.9081 8.59361 16.3108 7.19084C17.7136 5.78807 19.6162 5 21.6 5Z" fill="#57A64A"/>
            </svg>
            </IconButton>
            </Link>
            <Link to="/#kontakt">
            <IconButton>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="42" height="42" rx="10" stroke="#57A64A" strokeWidth="2"/>
            <path d="M19.35 5.3554C19.5155 5.2536 19.7059 5.1997 19.9002 5.1997C20.0945 5.1997 20.2849 5.2536 20.4504 5.3554L33.1008 13.1401C33.2478 13.2311 33.3843 13.3312 33.5103 13.4404L19.9002 21.8173L6.2901 13.4404C6.4161 13.3312 6.5526 13.2311 6.6996 13.1401L19.35 5.3554ZM34.5519 15.2674C34.5841 15.4494 34.6002 15.6349 34.6002 15.8239V27.25C34.6002 28.6424 34.0471 29.9777 33.0625 30.9623C32.0779 31.9469 30.7426 32.5 29.3502 32.5H10.4502C9.05781 32.5 7.72245 31.9469 6.73788 30.9623C5.75332 29.9777 5.2002 28.6424 5.2002 27.25V15.8239C5.2002 15.6335 5.217 15.448 5.2506 15.2674L19.35 23.9446C19.5155 24.0464 19.7059 24.1003 19.9002 24.1003C20.0945 24.1003 20.2849 24.0464 20.4504 23.9446L34.5519 15.2674ZM10.4502 34.6C11.4078 35.8747 12.9324 36.7 14.6502 36.7H30.4002C32.628 36.7 34.7646 35.815 36.3399 34.2397C37.9152 32.6644 38.8002 30.5278 38.8002 28.3V17.9239C38.8003 17.3857 38.6626 16.8565 38.4001 16.3867C38.1376 15.9168 37.7592 15.5221 37.3008 15.2401L36.6015 14.8096C36.6673 15.1428 36.7002 15.4809 36.7002 15.8239V28.3C36.7002 29.9709 36.0364 31.5733 34.855 32.7548C33.6735 33.9363 32.0711 34.6 30.4002 34.6H10.4502Z" fill="#57A64A"/>
            </svg>
            </IconButton>
            </Link>
        </NavContainer>
    );
};
const NavContainer = styled.div`
    position: absolute;
    width: 61px;
    height: 286px;
    background-color: #121212;
    border-color: #57A64A;
    border-width: 2px 2px 2px 0px;
    border-style: solid;
    border-radius: 0px 10px 10px 0px ;
    z-index: 1000;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    justify-content: center;
    position: fixed;
    @media (max-width: 768px) {

        width: 100%;
        height: 61px;
        left: 0;
        bottom: 0;
        top: auto;
        transform: translateY(0);
        border-radius: 0 0 0 0;
        border-width: 2px 0px 0px 0px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
`

const IconButton = styled.button`
    background:none;
    border: none;

    margin-top: 20px;
    cursor: pointer;
    padding: 0 8px 0 8px;

    @media (max-width: 768px) {
        margin-top: 8px;
    }
`
export default Navbar;
