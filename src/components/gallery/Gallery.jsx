import React from 'react';
import "./gallery.css"
import Gallery from '../../assets/img/Gallery1.png'

const Gallery = () => {
  return (
    <>
    <section className='gallerygrid'>
        <img src={Gallery} className="galleryimg"alt="Imagen de fondo de una chica apoyada sobre una bicicleta azul"/>
    </section>
    
    </>
  )
}

export default Gallery