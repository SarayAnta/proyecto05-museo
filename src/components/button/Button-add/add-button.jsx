import React from "react";
import { useNavigate } from "react-router-dom";  // Importa el hook useNavigate
import styled from "styled-components";  // Importa styled-components
 
const AddButton = styled.button`    // Crea un componente AddButton con styled-components
background-color: #3DE161d2;
display: flex;
color: #FFFFFF;
justify-content: center;
align-items: center;
font-family: 'Jost', sans-serif;
width: 25vw;
height: 8vh;
max-width: 150px;
margin-right: 20px;
border-radius: 15px;
font-weight: bold;


&:hover {
    background-color: #FFFFF;
    color: black;
    transform: scale(1.1);
    transition: 0.5s;
}

&:active {
    background-color: #3DE161d2;
    color: black;
    transform: scale(0.9);
    transition: 0.5s;
}


.add-bicycle {
    justify-content: center;
    font-size:1vw;
    margin:0;
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
        <p className="add-bicycle">AÑADIR BICICLETA</p>
</AddButton>
);
}

export default Addbutton; // Exporta el componente Addbutton