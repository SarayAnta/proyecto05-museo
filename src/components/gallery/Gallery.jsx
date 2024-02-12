import React from 'react';
import "./gallery.css"
import Gallery1 from '../../assets/img/Gallery1.png'
import App from '../bicycle/Bicycle'

const Gallery = () => {
  return (
    <>
    <section className='gallerygrid'>
        <img src={Gallery1} className="galleryimg"alt="Imagen de fondo de una chica apoyada sobre una bicicleta azul"/>
        <img src={Gallery1} className="galleryimg"alt="Imagen de fondo de una chica apoyada sobre una bicicleta azul"/>
    </section>
    <App/>
    </>
  )
}

export default Gallery