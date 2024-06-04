import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { sendEmail } from '../services/emailService.jsx';

const Kontakt = () => {
    const [formData, setFormData] = useState({//formulärdatan sparas i variabler
        name: '',
        email: '',
        message: ''
      });

      const handleChange = (e) => {//funktion för att uppdatera formulärdata när anvädaren ändrar ett fält
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = async (e) => {//handleSubmit för att hantera inskickning av formulär-datan
        e.preventDefault();
        try {
          await sendEmail(formData);
          alert('Email sent successfully!');
        } catch (error) {//errorhantering
          alert(error.message || 'Failed to send email.');
        }
      };
    return (
        <>
<div id="kontakt">
           <Container><PageTitle>KONTAKT</PageTitle></Container>

           <KontaktContainer>
                <KontaktInformation>
                    <KontaktTitel>Kontaktinformation</KontaktTitel>
                    <KontaktText>Email: oscarstrigerjobb@gmail.com</KontaktText>
                    <Link to="https://www.linkedin.com/in/oscar-striger-865aba13b/" target="_blank"><KontaktText>LinkedIn</KontaktText></Link>

                    <Link to="https://github.com/strigeroscar" target="_blank"><KontaktText>GitHub</KontaktText></Link>
                    <KontaktTextU>Tveka inte att skicka mig ett meddelande!</KontaktTextU>
                </KontaktInformation>
                <Divider></Divider>
                <KontaktFormDiv>
                    <KontaktForm onSubmit={handleSubmit}>
                        {/* name, email och message värden blir satta här */}
                        <KontaktFormInput placeholder='Enter your name...' type="text" id="name" name="name" value={formData.name} onChange={handleChange} required></KontaktFormInput>
                        <KontaktFormInput placeholder='Enter your email address...' type="email" id="email" name="email" value={formData.email} onChange={handleChange} required></KontaktFormInput>
                        <KontaktFormTextInput placeholder='Enter your message...' id="message" name="message" value={formData.message} onChange={handleChange} required></KontaktFormTextInput>
                        <KontaktButton type="submit"><p>Skicka</p></KontaktButton>
                    </KontaktForm>
                </KontaktFormDiv>

           </KontaktContainer>
</div>
        </>
    );
};


const PageTitle = styled.h1`
    color: #57a64a;
    font-family: "Orbitron";
    font-weight: 700;//Regular 400,Medium 500,SemiBold 600,Bold 700,ExtraBold 800,Black 900
    margin: 0;

`
const Container = styled.div`
 display: flex;
    justify-content: center;
    align-items: center;
  margin-bottom: 62px;
  position: relative;
  top: 10vh;

`
const KontaktContainer = styled.div`
    display: flex;
    align-items: center;
    //justify-content: space-between;
    padding: 20px;
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
    top: 10vh;
    padding-bottom: 100px;
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }
`
const KontaktInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
`
const KontaktFormDiv = styled.div`
    flex: 1;
`
const Divider = styled.div`
    width: 2px;
    height: 600px;
    background-color: #57A64A;
    margin: 0 20px;
    @media only screen and (max-width: 1100px) {
        width: 100%;
        height: 2px;
        margin: 20px 0 20px 0;
    }
`
const KontaktTitel = styled.h1`
    color: #57A64A;
    font-family: "Orbitron";
    font-weight: 400;//Regular 400,Medium 500,SemiBold 600,Bold 700,ExtraBold 800,Black 900
    //margin: 0;
    text-align: center;
    font-size: 30px;
    margin-bottom: 100px;
    @media (max-width: 768px) {
        font-size: 28px;

    }

    @media (max-width: 480px) {
        font-size: 26px;

    }
`
const KontaktText = styled.p`
    color: #57A64A;
    font-family: "Orbitron";
    font-weight: 400;//Regular 400,Medium 500,SemiBold 600,Bold 700,ExtraBold 800,Black 900
    //margin: 0;
    text-align: center;
    font-size: 22px;
    @media (max-width: 768px) {
        font-size: 20px;
        margin-left: 15px;
        margin-top: 20px;
        margin-right: 15px;
    }

    @media (max-width: 480px) {
        font-size: 18px;
        margin-left: 10px;
        margin-top: 10px;
        margin-right: 10px;
    }
`
const KontaktTextU = styled.p`
    color: #57A64A;
    font-family: "Orbitron";
    font-weight: 400;//Regular 400,Medium 500,SemiBold 600,Bold 700,ExtraBold 800,Black 900
    //margin: 0;
    text-align: center;
    font-size: 22px;
    margin-top: 100px;
    @media (max-width: 768px) {
        font-size: 20px;
        margin-left: 15px;
        margin-top: 20px;
        margin-right: 15px;
    }

    @media (max-width: 480px) {
        font-size: 18px;
        margin-left: 10px;
        margin-top: 10px;
        margin-right: 10px;
    }
`
const KontaktForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const KontaktFormInput = styled.input`
    width: 600px;
    height: 60px;
    border: 2px solid #57A64A;
    background-color: #121212;
    margin: 10px;

    color: #57A64A;
    font-family: "Orbitron";
    font-weight: 400;//Regular 400,Medium 500,SemiBold 600,Bold 700,ExtraBold 800,Black 900
    font-size: 22px;
    padding-left: 10px;

    &::placeholder {
        color: #57A64A;
    }
    @media only screen and (max-width: 1100px) {
        width: 90vw;
    }
`
const KontaktFormTextInput = styled.textarea`
    width: 600px;
    height: 300px;
    border: 2px solid #57A64A;
    background-color: #121212;
    margin: 10px;
    text-align: left;
    color: #57A64A;
    font-family: "Orbitron";
    font-weight: 400;//Regular 400,Medium 500,SemiBold 600,Bold 700,ExtraBold 800,Black 900
    font-size: 22px;
    padding-left: 10px;
    resize: none;
    &::placeholder {
        color: #57A64A;
    }
    @media only screen and (max-width: 1100px) {
        width: 90vw;
    }
`
const KontaktButton = styled.button`
    width: 216px;
    height: 58px;
    border: 1px solid #57A64A;
    border-radius: 10px;
    color: #57A64A;
    background-color: #121212;
    margin: 10px;
    cursor: pointer;
    p{
        font-size: 22px;
    //color: white;
    text-align: center;
    margin: 0;
    font-family: "Orbitron", sans-serif;
    }
    @media only screen and (max-width: 1100px) {

        margin: 10px auto;
        //width: 90vw;
    }
`

export default Kontakt;
