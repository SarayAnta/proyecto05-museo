import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getOneBicycle } from '../../services/service';

const CardContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 80vh;
    align-items: center;

    img {
        max-height: 70vh;
        max-width: 70vw;
        border: 0.5rem solid #D9D9D9;
    }

    .properties {
        display: grid;
    }

    h2 {
        text-align: center;
        font-family: 'Jost', sans-serif;
        font-size: 1.5rem;
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
    const [bicycle, setBicycle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBicycleDetails = async () => {
          try {
            const detailedBicycle = await getOneBicycle(id);
            setBicycle(detailedBicycle);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching bicycle:', error);
          }
        };
        fetchBicycleDetails();
    }, [id]);

    if (loading) {
        return <div>Cargando...</div>;
      }
    
      if (!bicycle) {
        return <div>No se encontró la bicicleta</div>;
      };

    return (
        <CardContainer>
        <img src={bicycle.image} alt={bicycle.model} />
        <section>
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