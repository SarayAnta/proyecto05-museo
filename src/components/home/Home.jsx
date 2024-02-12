import React, { useState, useEffect } from 'react';
import './home.css';
import BackgroundHome from '../../assets/img/BackgroundHome.png'
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';


const Home = () => {
  const [bicycles, setBicycles] = useState([]);

  useEffect(() => {
    const fetchBicycles = async () => {
      try {
        const response = await fetch('http://localhost:3000/bicycles');
        const data = await response.json();
        setBicycles(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching bicycles:', error);
      }
    };

    fetchBicycles();
  }, []);
  console.log(bicycles)
  return (
    <>
        <Nav/>
        <img src={BackgroundHome} alt="Imagen de fondo de una chica apoyada sobre una bicicleta azul"/>
        <div>
          <h2>Modelos de bicicletas:</h2>
            {console.log(bicycles)}
            {bicycles.map((bicycle) =>(
              <div>
              <p key={bicycle.id}>{bicycle.model}</p>
              <img src={bicycle.image}/>
              </div>
            ))}
        </div>
        <Footer/>  
    </>
  )
}

export default Home
z