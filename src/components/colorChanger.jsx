import React from 'react';
import styled from 'styled-components';

class ColorChanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColorIndex: 0,//Håller koll på vilken färg som är aktuell
      colors: ['#57a64a', '#FF5733', '#4287f5', '#f542d2'], // En lista med färger
    };
  }

  componentDidMount() {
    // laddar in den sparade färgen från localstorage när componenten laddas
    const savedColorIndex = localStorage.getItem('savedColorIndex');
    if (savedColorIndex) {
      this.applyColor(this.state.colors[savedColorIndex]);
      this.setState({ currentColorIndex: parseInt(savedColorIndex) });
    }
  }

  changeColor = () => {
    //Räknar ut nästa färgindex.
    const { currentColorIndex, colors } = this.state;
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    const nextColor = colors[nextColorIndex];
    this.applyColor(nextColor);//tillämpar nästa färg på alla relevanta element.

    // änrar placeholder färgen, (dethär va min fullösning för att fixa ett problem med just det elementet)
    this.changePlaceholderColor(nextColor);

    // sparar den nya färg indexet till localStorage
    localStorage.setItem('savedColorIndex', nextColorIndex);
    this.setState({ currentColorIndex: nextColorIndex });
  };

  applyColor = (color) => {//ndrar färgen på alla relevanta element på sidan. Den kontrollerar och ändrar:Text-färg, Bakgrunds-färg, border-färg, SVG stroke-färg, SVG fill-färg
    const elements = document.querySelectorAll('*');

    elements.forEach((element) => {
      const style = window.getComputedStyle(element);
      // text color
      if (style.color === 'rgb(87, 166, 74)' || style.color === 'rgb(255, 87, 51)' || style.color === 'rgb(66, 135, 245)' || style.color === 'rgb(245, 66, 210)') { // Check for all colors
        element.style.color = color;
      }
      // background color
      if (style.backgroundColor === 'rgb(87, 166, 74)' || style.backgroundColor === 'rgb(255, 87, 51)' || style.backgroundColor === 'rgb(66, 135, 245)' || style.backgroundColor === 'rgb(245, 66, 210)') {
        element.style.backgroundColor = color;
      }
      // border color
      if (style.borderColor === 'rgb(87, 166, 74)' || style.borderColor === 'rgb(255, 87, 51)' || style.borderColor === 'rgb(66, 135, 245)' || style.borderColor === 'rgb(245, 66, 210)') {
        element.style.borderColor = color;
      }
      // SVG stroke color
      if (element.tagName === 'svg') {
        const svgElements = element.querySelectorAll('rect');
        svgElements.forEach((svgElement) => {
          if (window.getComputedStyle(svgElement).stroke === 'rgb(87, 166, 74)' || window.getComputedStyle(svgElement).stroke === 'rgb(255, 87, 51)' || window.getComputedStyle(svgElement).stroke === 'rgb(66, 135, 245)' || window.getComputedStyle(svgElement).stroke === 'rgb(245, 66, 210)') {
            svgElement.style.stroke = color;
          }

        });
      }
      // SVG fill color
      if (element.tagName === 'svg') {
        const svgElements = element.querySelectorAll('path');
        svgElements.forEach((svgElement) => {
          if (window.getComputedStyle(svgElement).fill === 'rgb(87, 166, 74)' || window.getComputedStyle(svgElement).fill === 'rgb(255, 87, 51)' || window.getComputedStyle(svgElement).fill === 'rgb(66, 135, 245)' || window.getComputedStyle(svgElement).fill === 'rgb(245, 66, 210)') {
            svgElement.style.fill = color;
          }
        });
      }

    });
  };

  changePlaceholderColor = (color) => {//skapar ett nytt stil-element och lägger till CSS för att ändra placeholder-färgen i input-fält. (fullösning)
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      ::placeholder {
        color: ${color} !important;
      }
    `;
    document.head.appendChild(styleElement);
  };

  render() {
    return (
      <div>
        <StyledButton onClick={this.changeColor}><PageTitle>Oscar Striger</PageTitle></StyledButton>
      </div>
    );
  }
}

const StyledButton = styled.button`
  background-color: #121212;
  border-style: none;
  cursor: pointer;
  margin-bottom: 8px;
`;

const PageTitle = styled.h1`
  color: #57a64a;
  font-family: "Orbitron";
  font-weight: 700;
  margin: 0;
  z-index: 100001;
`;

export default ColorChanger;
