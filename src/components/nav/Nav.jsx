import React from 'react';
import styled from 'styled-components';
import Addbutton from '../button/Button-add/add-button';
import { Link } from 'react-router-dom';



const StyledNav = styled.nav`
  background-color: #393939;
  height: 10vh;
  width: auto;
  color: white;
  font-family: 'Jost', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`


const Title = styled.h1`
  margin-left: 1vw;
  font-size: 1.75vw;
  letter-spacing: 0.1em;
  
  transition: 0.5s ease;

  &:hover {
    color: #3DE361;
    transition: 0.5s;
    transform: scale(1.1) translateX(10px);
  }
  
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyleLink to="/">
        <Title>MUSEO DE BICICLETAS</Title>
        </StyleLink>
      <Addbutton />
    </StyledNav>
  );
}

export default Nav;

