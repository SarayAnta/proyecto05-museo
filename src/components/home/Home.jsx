import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BackgroundHome from '../../assets/img/BackgroundHome.png';
import { useNavigate } from "react-router-dom";
import { getBicycles, deleteBicycle } from '../../services/service';

const HomeContainer = styled.div`

body {
    margin: 0;
  }


  .title-gallery {
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-size: xx-large;
    text-shadow:  4px 4px 4px #D9D9D9;
    text-transform: uppercase;
    
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
    max-width: 17vw;
    max-height: 45vh; 
    border: 0.5rem solid #D9D9D9;
    cursor: pointer;
  }

  .bicyclesimg:hover {
    transform: scale(1.1);
    transition: 0.5s;

  }

  p {
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
    text-decoration: bold;
    text-shadow:  4px 4px 4px #D9D9D9;

  }

 gallery-button {
  
  display: flex;
  width: 5vw;
  justify-content: space-around;
  
  
 }

 button img {
  width: 2rem;
  height: auto;
  

 }

button.edit-button, button.delete-button  {
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0.75rem;
  

}



button.edit-button:hover, button.delete-button:hover {
  transform: scale(1.5);
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
        <h2 className="title-gallery">Modelos de bicicletas</h2>
        <div className='gallery'>
          {bicycles.map((bicycle) => (
            <div className='gallerygrid' key={bicycle.id}>
              <img  onClick={() => navigate(`/card/${bicycle.id}`)} className="bicyclesimg" src={bicycle.image} alt={bicycle.model} />
              <p>{bicycle.model}</p>
              <div className="gallery-button" >
              <button className="edit-button" onClick={() => navigate(`/Edit/${bicycle.id}`)}>
                <img src="src\assets\img\Edit.png" alt="" />
              </button>
              <button className="delete-button" onClick={() => {deleteBicycle(`${bicycle.id}`); navigate(0)}}>
                <img src="src\assets\img\Delete.png"></img></button>
              </div>
            </div>
          ))}
        </div>
      </HomeContainer>
    </>
  );
}
//useparamt luego peticion get de id que tngo en la url 
export default Home;
