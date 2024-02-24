import React from "react";
import { useNavigate } from "react-router-dom";  // Importa el hook useNavigate
import styled from "styled-components";  // Importa styled-components
 
const AddButton = styled.button`    // Crea un componente AddButton con styled-components
        background-color: #3DE361;
        display: flex;
        justify-content: center;
    
        font-family: 'Jost', sans-serif;
        width: 25vw;
        height: 8vh;
        max-width: 150px;
        margin-right: 20px;
        border-radius: 15px;

        &:hover {
            background-color: #3DE361;
            color: black;
            transform: scale(1.1);
            transition: 0.5s;
        }

        &:active {
            background-color: #3DE361;
            color: black;
            transform: scale(0.9);
            transition: 0.5s;
        }

        p ¨

    

        .add-bicycle {
            justify-content: center;
            align-items: center;
            align-content: center;
            font-size: 100%;
            text-align: center;
            
            
        }

        //media queries
        @media (width > 550px) {
            width: 30%;
            margin-right: 10px;

            add-bicycle {
                font-size: 50%;
                text-align: center;
                

        }

      

       
    `;

const Addbutton = () => {   // Crea un componente Addbutton
    const navigate = useNavigate();  // Declara una constante navigate que almacena el hook useNavigate

    return (  // Devuelve el componente AddButton con el evento onClick que redirige a la ruta /NewItem// Añade la clase "add-button" al componente AddButton
        <AddButton className="add-button" onClick={() => navigate("/NewItem")}>             
                <p className="add-bicycle">Añadir bicicleta</p>
        </AddButton>
        );
}

export default Addbutton; // Exporta el componente Addbutton