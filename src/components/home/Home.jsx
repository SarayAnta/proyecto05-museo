import React from 'react';
import './home.css';
import BackgroundHome from '../../assets/img/BackgroundHome.png'
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const bicycles = useLoaderData();
  //console.log (bicycles); es para comprobar

  return (
    <>
        <Nav/>
        <img src={BackgroundHome} alt="Imagen de fondo de una chica apoyada sobre una bicicleta azul"/>
        <section>
          {bicycles.map((bicycle => {
           <Card key={bicycle.id} data={bicycle}/> //el equivalente a Card en nuestro proyecto es otro
          })
          )}
        </section>
        <Footer/>  
    </>
  )
}

export default Home
