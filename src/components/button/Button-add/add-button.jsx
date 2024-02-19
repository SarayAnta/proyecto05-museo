import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
 
const AddButton = styled.button`
        background-color: #3DE361;
        font-size: 9%;
        color: black;
        font-family: 'Jost', sans-serif;
        width: 15vw;
        height: 8vh;
        margin-right: 1vw;
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
        }
        cursor: pointer;

       
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