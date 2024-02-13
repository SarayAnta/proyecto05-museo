import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BackgroundHome from '../../assets/img/BackgroundHome.png';
import Nav from '../nav/Nav';
import Footer from '../footer/footer';
import { useNavigate } from "react-router-dom";

const HomeContainer = styled.div`
  body {
    margin: 0;
  }

  img {
    height: auto;
    width: 100vw;
  }

  .gallery {
    display: flex; 
    flex-wrap: wrap; 
    justify-content: space-around; 
  }

  .gallerygrid {
    margin: 10px; 
    text-align: center; 
  }

  .bicyclesimg {
    max-width: 200px; 
  }
`;

const Home = () => {
  const [bicycles, setBicycles] = useState([]);
  const navigate = useNavigate();

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

  return (
    <>
      <Nav />
      <img src={BackgroundHome} alt="Imagen de fondo de una chica apoyada sobre una bicicleta azul" />
      <HomeContainer>
        <h2>Modelos de bicicletas:</h2>
        <div className='gallery'>
          {bicycles.map((bicycle) => (
            <div className='gallerygrid' key={bicycle.id}>
              <img className="bicyclesimg" src={bicycle.image} alt={bicycle.model} />
              <p>{bicycle.model}</p>
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
