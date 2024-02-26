import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BackgroundHome from '../../assets/img/BackgroundHome.png';
import { useNavigate } from "react-router-dom";
import { getBicycles, deleteBicycle } from '../../services/service';
import { useLinkClickHandler } from 'react-router-dom';
/*import { LikeButton } from '../likeButton/LikeButton';*/

const HomeContainer = styled.div`

body {
    margin: 0;
    border-box: box-sizing;
  }


  .title-gallery {
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-size:2vw;
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
    font-size: 1vw;
    text-transform: uppercase;
    text-decoration: bold;
    text-shadow:  4px 4px 4px #D9D9D9;
    padding-top:5%;

  }

  p:hover {
    color: #3DE361;
    transition: 0.5s;
    transform: scale(1.1) rotate(360deg);
    font-size: 1.5vw;
  }

gallery-button {
  display: flex;
  width: 5vw;
  justify-content: space-around;
 }

button img {
  width: 2vw;
  height: auto;
  }

  button.edit-button, button.delete-button, button.like-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 0.75rem;
    transition: 0.5s;
  

  }

  button.edit-button:hover, button.delete-button:hover, button.like-button:hover {
    transform: scale(1.5);
    transition: 0.5s;

  }
`;

const Home = () => { // Crea un componente Home
  const [bicycles, setBicycles] = useState([]); // Declara una constante bicycles y una función setBicycles que almacenan un array vacío UseState, se desestructura el array en dos elementos
  const navigate = useNavigate(); // Declara una constante navigate que almacena el hook useNavigate

  useEffect(() => {  // Crea un efecto que se ejecuta al renderizar el componente
      const fetchData = async () => {  // Crea una función fetchData que se ejecuta de manera asíncrona
      const data = await getBicycles() // Declara una constante data que almacena el resultado de la función getBicycles
      console.log(data); // Muestra en consola el contenido de la constante data
      setBicycles(data); // Ejecuta la función setBicycles con el contenido de la constante data como argumento
    }
    fetchData(); // Ejecuta la función fetchData
    }
   , []);


  return ( // Retorna un fragmento con el contenido del componente
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
                <img src="src\assets\img\Edit.png" alt="Editar" />
              </button>
              <button className="delete-button" onClick={() => {const confirmDelete = window.confirm('¿Deseas eliminar esta bicicleta?'); if (confirmDelete) {deleteBicycle(`${bicycle.id}`); navigate(0)}}}>
                <img src="src\assets\img\Delete.png" alt= "Eliminar"/>
              </button>
              <button className="like-button" onDoubleClick={() => CounterLikes(`${bicycle.likes}`)}>
                <img src="src\assets\img\Like.png" alt="Me gusta" />
              </button>
              
            


              </div>
            </div>
          ))}
        </div>
      </HomeContainer>
    </>
  );
}

//useparamt luego peticion get de id que tngo en la url y luego el id que me llega lo paso a la funcion de getBicycleById
export default Home;