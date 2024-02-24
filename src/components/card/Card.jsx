import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getOneBicycle } from '../../services/service';  // Cambiado "service" por "services/service" donde tenemos los métodos de la API
const CardContainer = styled.div`
    display: flex;
    align-content: center;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80vh;
    align-items: center;
    flex-wrap: wrap;


    img {
        max-height: 60vh;
        max-width: 60vw;
        border: 0.5rem solid #D9D9D9;
    }

    .properties {
        display: grid;
        width: 30vw;
        height: 20vh;
    }

    .container-properties {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 30vw;
        max-height: 60vh;
    }

    h2 {
        text-align: center;
        font-family: 'Jost', sans-serif;
        font-size: 1vw;
        text-transform: uppercase;
        text-decoration: bold;
        text-shadow:  4px 4px 4px #D9D9D9;
    }

    p {
        font-family: 'Jost', sans-serif;
        text-align: center;
        font-size: 1vw;
    }

  
`

const Card = () => {  // Cambiado "props" por "id" para que coincida con el nombre que le damos en el archivo App.jsx
    const { id } = useParams();  //UseParams es un hook que nos permite acceder a los parámetros de la URL
    const [bicycle, setBicycle] = useState();  //Usamos el hook useState para guardar el estado de la bicicleta

    useEffect(() => {  //Usamos el hook useEffect para hacer la petición a la API
        const fetchBicycleDetails = async () => {           //fetchBicycleDetails es una función asíncrona que nos permite hacer la petición a la API
            const detailedBicycle = await getOneBicycle(id);  //Usamos el método getOneBicycle de la API para obtener los detalles de la bicicleta
            setBicycle(detailedBicycle); //Usamos el método setBicycle para guardar los detalles de la bicicleta en el estado
        };
        fetchBicycleDetails();          //Llamamos a la función fetchBicycleDetails
    }, [id]);   //Le pasamos el id como dependencia para que se ejecute cada vez que cambie el id
    
      if (!bicycle) {  //Si no hay bicicleta, devolvemos un mensaje de error
        return <div style={{height: "80vh", fontFamily: "Jost", fontSize: "2em", color: "red", display: "flex", justifyContent: "center", alignItems: "center"}}>No se encontró la bicicleta</div>;
      }; //Si hay bicicleta, devolvemos la información de la bicicleta

    return ( //Usamos el componente CardContainer para mostrar la información de la bicicleta
        <CardContainer> 
        <img src={bicycle.image} alt={bicycle.model} />
        <section className="container-properties">
            <div className="properties">
                <h2>Modelo:</h2>
                <p>{bicycle.model}</p>
            </div>
            <div className="properties">
                <h2>Cuadro:</h2>
                <p>{bicycle.frame}</p>
            </div>
            <div className="properties">
                <h2>Velocidades:</h2>
                <p>{bicycle.speeds}</p>
            </div>
            <div className="properties">
                <h2>Eléctrica:</h2>
                <p>{bicycle.electric ? "Sí" : "No"}</p>
            </div>
        </section>
        </CardContainer>
    )
}


export default Card