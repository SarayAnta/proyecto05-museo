import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BackgroundHome from '../../assets/img/BackgroundHome.png';
import { useNavigate } from "react-router-dom";
import { getBicycles, deleteBicycle } from '../../services/service';

const HomeContainer = styled.div`

body {
    margin: 0;
  }


  h2 {
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-size: xx-large;
  }
  

  .background-img {
    width: 100%;
    height: auto;
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
    max-width: 30vw;
    border: 0.5rem solid #D9D9D9;
  }

  p {
    text-align: center;
    font-family: 'Jost', sans-serif;
  }

 gallery-button {
  border: none;
  display: flex;
  width: 5vw;
 }

 button img {
  width: 20px;
  height: auto; 
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
    <HomeContainer>
        <img className="background-img"src={BackgroundHome} alt="Imagen de fondo de una chica apoyada sobre una bicicleta azul" />
        <h2>Modelos de bicicletas</h2>
        <div className='gallery'>
          {bicycles.map((bicycle) => (
            <div className='gallerygrid' key={bicycle.id}>
              <img className="bicyclesimg" src={bicycle.image} alt={bicycle.model} />
              <p>{bicycle.model}</p>
              <div className="gallery-button" >
              <button className="edit-button" onClick={() => navigate("/Edit")}>
                <img src="src\assets\img\Edit.png" alt="" />
              </button>
              <button onClick={() => deleteBicycle(`${bicycle.id}`)}>
                <img src="src\assets\img\Delete.png"></img></button>
                </div>
            </div>
          ))}
        </div>
      </HomeContainer>
    </>
  );
}

export default Home;
