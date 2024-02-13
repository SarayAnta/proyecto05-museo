import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
 
const AddButton = styled.button`
        background-color: #3DE361;
        font-size: 1em;
        color: black;
        font-family: 'Jost', sans-serif;
        width: 15vw;
        height: 6vh;
        margin-right: 1vw;
        border-radius: 10px 10px 10px 10px;
    `;

const Addbutton = () => {
    const navigate = useNavigate();

    return (
        <AddButton className="add-button" onClick={() => navigate("/NewItem")}>
                Añadir bicicleta
        </AddButton>
        );
}

export default Addbutton;