import React from 'react';
import { useHistory } from 'react-router-dom';
import "./add-button.css"

const Addbutton = () => {
  const history  = useHistory();

  const navigateToFormPage = () => {
    history.push('/NewItem'); // Navega a la ruta '/NewItem'
  }

  return (
    <div>
      <button onClick = {navigateToFormPage}> Añadir bicicleta </button>
    </div>
  );
};

export default Addbutton;