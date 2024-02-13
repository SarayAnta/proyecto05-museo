import React from 'react';
import styled from 'styled-components';
import Addbutton from '../button/Button-add/Add-button';

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

