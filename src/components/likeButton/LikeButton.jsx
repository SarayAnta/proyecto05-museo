import React from 'react';
import React, { useState } from 'react';
import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const LikeContainer = styled.div`
    .like {
        width: 1vw;
        height: 1vh;
        margin: 0 0 0 0;
        padding: 0 0 0 0;
    }

    .like:hover {
        transform: scale(1.1);
        transition: 0.5s;
    }

    .like:active {
        transform: scale(0.9);
        transition: 0.5s;
        color: red;
    }
`;




function CounterLikes() {
  const [likes, setLikes] = useState(0);

  

  useEffect(() => {
    // Obtén los likes actuales de la foto al cargar el componente
    axios.get(`/server/db.json/${bicyles.Id}`)
      .then(response => {
        setLikes(response.data.likes);
      });
  }, [bicyles.Likes]);

  const handleLike = () => {
    // Incrementa los likes en el estado local
    setLikes(likes + 1);

    // Luego, envía una solicitud PUT o PATCH para actualizar los likes en la base de datos
    axios.put(`/server/db.json/${bicyles.Id}`, { likes: likes + 1 })
      .catch(error => {
        console.error('Hubo un error al actualizar los likes en la base de datos', error);
        // Si hay un error, revierte los likes en el estado local
        setLikes(likes);
      });
  };

  // ...otro código...

 
    return response.json(CounterLikes()); //Retornamos la respuesta de la API
  
  };


  /*
    (
      
      <div className="bicycle-container">
            
            <button className="like-button" onDoubleClick={handleLike}>Me gusta</button>
            <p className="like-counter">{likes}</p>
          
        
      <button onClick={handleLike}>Me gusta</button>
      <p>{likes}</p>
    </div>
  );

export default CounterLikes;






/*


function LikeButton() {
        const [likes, setLiked] = useState(false);
      
        const handleLike = () => {
          setLikes(likes + 1);
        };
      
        return (
          <div className="like-container">
            <img src="" alt="Descripción de la foto" />
            <button className="like-button" onClick={handleLike}>
              {liked ? "Me gusta" : "No me gusta"}
            </button>
          </div>
        );
      }
      
      export default LikeButton;


    function BicycleLikes() {
        const [likes, setLikes] = useState(0);
      
        const handleLike = () => {
          setLikes(likes + 1);
        };
      
        return (
          <div className="bicycle-container">
            <img src="ruta/a/tu/foto.jpg" alt="Descripción de la foto" />
            <button className="like-button" onDoubleClick={handleLike}>Me gusta</button>
            <p className="like-counter">{likes}</p>
          </div>
        );
      }
      
      export default BicycleLikes ()

    return (
        <>
            <LikeContainer className='like'>
                <img src="../assets/img/like.png" alt="like" />
            </LikeContainer>
        </>
    );
*/