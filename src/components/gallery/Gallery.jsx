import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Gallery1 from '../../assets/img/Gallery1.png';

// Cambiado "gallery" por "div" para usar la clase de estilos correctamente
const GalleryContainer = styled.div`
  .gallerygrid {
    display: flex;
    justify-content: space-around;
    padding: auto;
  }

  .galleryimg {
    width: 15vw;
    height: 20vh;
    padding: 5vh 5vw;
   
  }

  /*
  @media only screen and (max-width: 600px) {
    .gallerygrid {
      flex-direction: column; 
      align-items: center;
    }

    .galleryimg {
      width: 40vw;
      height: 20vh; 
      padding: 5vh 0; 
      margin-bottom: 20px; 
    }
  }*/
`;

const Gallery = () => {
  return (
    <>
      {/* Cambiado "Gallery" por "GalleryContainer" */}
      <GalleryContainer className='gallerygrid'>
        <img src={Gallery1} className="galleryimg" alt="Imagen de fondo de una chica apoyada sobre una bicicleta azul"/>
        <img src={Gallery1} className="galleryimg" alt="Imagen de fondo de una chica apoyada sobre una bicicleta azul"/>
      </GalleryContainer>
    </>
  );
}

export default Gallery;
