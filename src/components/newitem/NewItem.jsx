import React from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { addBicycle } from '../../services/service';
import { useRef } from 'react';
import { useRef } from 'react';

const StyledNewItem = styled.div`

height: 80vh;
display: flex;
align-items: center;

body {
    max-height: 100%;
  }

  form {
    font-family: 'Jost', sans-serif;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 3%;
    margin-bottom: 3%;
    padding: 20px;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  label {
    display: block;
    margin-bottom: 10px;
    color: #000000;
  }
  
  input[type="text"],
  input[type="file"],
  select {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    background-color: #D9D9D9;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  input[type="submit"] {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #000000;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
  }
  
  input[type="submit"]:hover {
    background-color: #333333;
  }
  
  .add {
    margin-top: 15px;
  }
  
  .error-message {
    color: red;
    font-size: 14px;
  }  
  
  .cuadred {
    display: flex;
  }
  
  .frame,
  .electric {
    display: flex;
    align-items: center; /* Alinear verticalmente */
    margin-right: 30px; /* Espacio entre los campos */
  }
  
  .frame label,
  .electric label {
    margin-right: 20px; /* Espacio entre el label y el input */
    margin-top: -2vh;
  }
  
  .frame select {
    flex: 1; /* El input ocupa todo el espacio restante */
    width: 200px;
  }
  
  .electric input[type="checkbox"] {
    flex: 1; /* El input ocupa todo el espacio restante */
    margin-top: -3vh;
  }
  
  input[type="submit"] {
    background-color: #3de161d2;
    margin-top: 1%;
  }
  
  @media screen and (max-width: 480px) {
    form {
      padding: 30px;
    }
  }
`;

const NewItem = () => {  // Añade el hook useNavigate a la importación de react-router-dom y declara una constante navigate que almacena el hook useNavigate

    const { register, formState: { errors }, handleSubmit, reset} = useForm(); // Desestructura los métodos register, errors y handleSubmit del hook useForm
    const audioRef = useRef(null);

    // Function to play sound
    const playSound = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };  
    const onSubmit = async (data) => {  // Crea una función asíncrona onSubmit que recibe un parámetro data y hace una petición a la API con el método addBicycle
        const { success, error } = await addBicycle(data);  // Desestructura las propiedades success y error de la respuesta de la petición a la API con el método addBicycle

        if (success) {  // Si success es true
            // Mostrar mensaje de éxito
            alert('¡La bicicleta fue añadida correctamente!');
            // Reiniciar el formulario
            reset();
        } else {
            // Mostrar mensaje de error
            alert(error);  // Si success es false, muestra el mensaje de error
        }
    }

    return (
        <StyledNewItem>
    <audio ref={audioRef} src="src\assets\sound\7TSW2M4-bicycle-bell.mp3" />
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Modelo</label>
                <input className='model' type="text" {...register('model', {
                    required: true,
                })}/>
                {errors.model?.type === 'required' && <p className="error-message">El campo modelo es requerido</p>}
            </div>
            <div>
                <label>Velocidades</label>
                <input className='speeding' type="text" {...register('speeds', {
                    pattern: /^[0-9]{1,3}$/,
                    required: true,
                })}/>
                {errors.speeds?.type === 'pattern' && <p className="error-message">La velocidad debe ser un valor numérico</p>}
                {errors.speeds?.type === 'required' && <p className="error-message">El campo velocidades es requerido</p>}
            </div>
            <div className='cuadred'>
                <div className='frame'>
                    <label>Cuadro</label>
                    <select {...register('frame')}>
                        <option value="Aluminio">Aluminio</option>
                        <option value="Acero">Acero</option>
                        <option value="Plástico">Plástico</option>
                        <option value="Carbono">Carbono</option>
                        <option value="Otros">Otros</option>
                    </select>
                </div>
                <div className='electric'>
                    <label>Eléctrica</label>
                    <input className="checkbox-css" type="checkbox" {...register('electric')} />
                </div>
            </div>
            <div>
                <label htmlFor="imageUpload">Img URL</label>
                <input className="bicyclesimg" type="text" {...register('image', {
                pattern: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                required:true,
                })}/>
                {errors.image?.type === 'pattern' && <p className="error-message">El formato de la url de la imagen es incorrecto</p>}
                {errors.image?.type === 'required' && <p className="error-message">El campo url de la imagen es requerido</p>}
            </div>
            <input type="submit" value="Añadir" onClick={playSound}/>
       </form>
        </StyledNewItem>
    );
}
           
export default NewItem; // Exporta el componente NewItem para poder utilizarlo en otros archivos
