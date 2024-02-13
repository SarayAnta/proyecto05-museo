import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BackgroundHome from '../../assets/img/BackgroundHome.png';
import Nav from '../nav/Nav';
import Footer from '../footer/footer';

// Cambiado styled.Home a styled.div ya que no hay un componente HTML llamado Home
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

  useEffect(() => {
    const fetchBicycles = async () => {
      try {
        const response = await fetch('http://localhost:3000/bicycles');
        const data = await response.json();
        setBicycles(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching bicycles:', error);
      }
    };

    fetchBicycles();
  }, []);

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
            </div>
          ))}
        </div>
      </HomeContainer>
      <Footer />
    </>
  );
}

export default Home;
