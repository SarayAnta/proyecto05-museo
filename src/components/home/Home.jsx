import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BackgroundHome from '../../assets/img/BackgroundHome.png';
import Nav from '../nav/Nav';
import Footer from '../footer/footer';
import { useNavigate } from "react-router-dom";
import { getBicycles, deleteBicycle } from '../../services/service';

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
      const fetchData = async () => {
      const data = await getBicycles()
      console.log(data);
      setBicycles(data);
    }
    fetchData();
    }

   , []);


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
              <button onClick={() => deleteBicycle(`${bicycle.id}`)}>Eliminar</button>
            </div>
          ))}
        </div>
      </HomeContainer>
      <Footer />
    </>
  );
}

export default Home;
