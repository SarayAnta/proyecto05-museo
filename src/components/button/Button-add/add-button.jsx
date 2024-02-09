import React from 'react';
import './add-button.css'
import { useNavigate } from 'react-router-dom';
 
const Addbutton = () => {
    const navigate = useNavigate();

    return (
        <button className="add-button" onClick={() => navigate("/NewItem")}>
                Añadir bicicleta
            </button>
        );
}

export default Addbutton;