import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getOneBicycle } from '../../services/service';

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
        max-height: 70vh;
    }

    h2 {
        text-align: center;
        font-family: 'Jost', sans-serif;
        font-size: 20%;
        text-transform: uppercase;
        text-decoration: bold;
        text-shadow:  4px 4px 4px #D9D9D9;
    }

    p {
        font-family: 'Jost', sans-serif;
        text-align: center;
    }

  
`

const Card = () => {
    const { id } = useParams();
    const [bicycle, setBicycle] = useState();

    useEffect(() => {
        const fetchBicycleDetails = async () => {
            const detailedBicycle = await getOneBicycle(id);
            setBicycle(detailedBicycle);
        };
        fetchBicycleDetails();
    }, [id]);
    
      if (!bicycle) {
        return <div style={{height: "80vh", fontFamily: "Jost", fontSize: "2em", color: "red", display: "flex", justifyContent: "center", alignItems: "center"}}>No se encontró la bicicleta</div>;
      };

    return (
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