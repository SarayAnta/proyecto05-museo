import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
 
const AddButton = styled.button`
        background-color: #3DE361;
       
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

        &:focus {
            outline: none;
            cursor: pointer;
        }

        .add-bicycle {
            font-size: 50%;
            text-align: center;
            
        }

        //media queries
        @media (max-width: 500px) {
            width: 30%;
            margin-right: 10px;
        }

      

       
    `;

const Addbutton = () => {
    const navigate = useNavigate();

    return (
        <AddButton className="add-button" onClick={() => navigate("/NewItem")}>
            
                <p className="add-bicycle">Añadir bicicleta</p>
        </AddButton>
        );
}

export default Addbutton;