import React from 'react';
import styled from 'styled-components';
import Addbutt from '../button/Button-add/add-button';

// Eliminé la declaración de estilo 'body' ya que no se puede usar en este contexto

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

const Title = styled.h1`
  margin-left: 1vw;
  font-size: 1.5rem;
`;

const Nav = () => {
  return (
    <StyledNav>
      <Title>MUSEO DE BICICLETAS</Title>
      <Addbutton />
    </StyledNav>
  );
}

export default Nav;

