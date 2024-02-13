import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BackgroundHome from '../../assets/img/BackgroundHome.png';
import Nav from '../nav/Nav';
import Footer from '../footer/footer';
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [bicycles, setBicycles] = useState([]);

  useEffect(() => {
    const getBicycles = async () => {
      try {
        const response = await fetch('http://localhost:3000/bicycles');
        const data = await response.json();
        setBicycles(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching bicycles:', error);
      }
    };

    getBicycles();
  }, []);
  console.log(bicycles)

const deleteBicycle = async (id) => {
  try {
      await fetch(`http://localhost:3000/bicycles/${id}`, {
      method: 'DELETE'
    });
    const updatedBicycles = bicycles.filter(bicycle => bicycle.id !== id);
    setBicycles(updatedBicycles);
  } catch (error) {
    console.error('Error deleting bicycle:', error);
  }
};

  const navigate = useNavigate();
  return (
    <>
        <Nav/>
        <img src={BackgroundHome} alt="Imagen de fondo de una chica apoyada sobre una bicicleta azul"/>
        <div>
          <h2>Modelos de bicicletas:</h2>
            {bicycles.map((bicycle) =>(
      <section className='gallery'>
            <div className='gallerygrid '>
              <img className="bicyclesimg" src={bicycle.image}/>
              <p key={bicycle.id}>{bicycle.model}</p>
              <button onClick={() => deleteBicycle(bicycle.id)}>Eliminar</button>
            </div>
          ))}
        </div>
      </HomeContainer>
      <Footer />
    </>
  );
}

export default Home;

