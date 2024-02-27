import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import styled, { keyframes } from 'styled-components';
import { addBicycle, uploadImage} from '../../services/service';


const moveBike = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(1110px);
  }
`;

const StyledBike = styled.img`
  position: absolute;
  top: 88%;
  left: -390px; 
  animation: ${moveBike} 20s linear infinite; 
  width: 100px;
`;

const StyledNewItem = styled.div`

height: 80vh;
display: flex;
align-items: center;
justify-content: center;
position: relative;

body {
    max-height: 100%;
  }

  form {
    font-family: 'Jost', sans-serif;
    font-size: 1vw;
    max-width: 550px;
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
    font-size: 1vw;
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
    align-items: center; 
    margin-right: 30px; 
  }
  
  .frame label,
  .electric label {
    margin-right: 20px; 
    margin-top: -2vh;
  }
  
  .frame select {
    flex: 1; 
    width: 200px;
  }
  
  .electric input[type="checkbox"] {
    flex: 1; 
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

const FormContainer = styled.div`
  max-width: 550px;
  margin: 0 auto;
  margin-top: 3%;
  margin-bottom: 3%;
  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const NewItem = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);
  const audioRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(""); 

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const onSubmit = async (data) => {
    try {
      const imageData = new FormData();
      imageData.append("file", data.image[0]); 
      imageData.append("upload_preset", "Presents_react"); 

      const response = await uploadImage(imageData); 
      setImageUrl(response.secure_url); 

      const bicycleData = { ...data, image: response.secure_url }; 
      const { success, error } = await addBicycle(bicycleData);

      if (success) {
        alert('¡La bicicleta fue añadida correctamente!');
        reset();
            setIsSubmitted(true); 
            setTimeout(() => setIsSubmitted(false), 1500);
      } else {
        alert(error);
      }
    } catch (error) {
      console.error("Error al cargar la imagen:", error);
      alert('Error al cargar la imagen. Por favor, intenta nuevamente.');
    }   
  };

  return (
    <StyledNewItem>
           <FormContainer isSubmitted={isSubmitted}>
           <StyledBike src="src\assets\img\Bicycle393939.png" alt="Bike" />
          <audio ref={audioRef} src="src\assets\sound\7TSW2M4-bicycle-bell.mp3" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Modelo</label>
          <input className='model' type="text" {...register('model', { required: true })}/>
          {errors.model?.type === 'required' && <p className="error-message">El campo modelo es requerido</p>} 
        </div>
        <div>
          <label>Velocidades</label>
          <input className='speeding' type="text" {...register('speeds', { pattern: /^[0-9]{1,3}$/, required: true })}/>
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
          <label>Adjuntar imagen</label>
          <input type="file" {...register('image', { required: true })} />
          {errors.image && <p className="error-message">Por favor adjunta una imagen</p>}
        </div>
        <input type="submit" value="Añadir" onClick={playSound} />
      </form>
       </FormContainer>
    </StyledNewItem>
  );
}

export default NewItem;