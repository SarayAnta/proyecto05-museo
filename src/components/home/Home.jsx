import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BackgroundHome from '../../assets/img/BackgroundHome.png';
import { useNavigate } from "react-router-dom";
import { getBicycles, deleteBicycle, deleteImage } from '../../services/service';
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

const Home = () => {
  const [bicycles, setBicycles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBicycles();
      setBicycles(data);
    };
    fetchData();
  }, []);

  const handleDelete = async (id, imageUrl) => {
    try {
      await deleteBicycle(id); // Eliminar la bicicleta de la base de datos
      await deleteImage(imageUrl); // Eliminar la imagen de Cloudinary

      // Actualizar el estado local u otras acciones necesarias
      setBicycles(bicycles.filter(bicycle => bicycle.id !== id));
    } catch (error) {
      console.error('Error deleting bicycle and image:', error);
    }
  };

  return (
    <HomeContainer>
      <img className="background-img" src={BackgroundHome} alt="Imagen de fondo" />
      <h2 className="title-gallery">Modelos de bicicletas</h2>
      <div className='gallery'>
        {bicycles.map((bicycle) => (
          <div className='gallerygrid' key={bicycle.id}>
            <img onClick={() => navigate(`/card/${bicycle.id}`)} className="bicyclesimg" src={bicycle.image} alt={bicycle.model} />
            <p>{bicycle.model}</p>
            <div className="gallery-button" >
              <button className="edit-button" onClick={() => navigate(`/Edit/${bicycle.id}`)}>
                <img src="src\assets\img\Edit.png" alt="Editar" />
              </button>
              <button className="delete-button" onClick={() => { const confirmDelete = window.confirm('¿Deseas eliminar esta bicicleta?'); if (confirmDelete) { handleDelete(bicycle.id, bicycle.image); navigate(0)}}}>
                <img src="src\assets\img\Delete.png" alt="Eliminar"/>
              </button>
              <button className="like-button">
                <img src="src\assets\img\Like.png" alt="Me gusta" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </HomeContainer>
  );
}

export default Home;