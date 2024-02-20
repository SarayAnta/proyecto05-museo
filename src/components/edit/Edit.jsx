import React, { useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { updateItem, getOneBicycle } from '../../services/service';
import { useParams } from 'react-router'; // Importa el hook useParams

const StyledEdit = styled.div`
height: 80vh;
display: flex;
align-items: center;

body {
    max-height: 100%;
  }

  form {
    font-family: 'Jost', sans-serif;
    max-width: 450px;
    min-width: 300px;
    margin: 0 auto;
    margin-top: 3%;
    margin-bottom: 3%;
    padding: 2%;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  label {
    display: block;
    margin-bottom: 2%;
    color: #000000;
  }
  
  input[type="text"],
  input[type="file"],
  select {
    width: 100%;
    padding: 3%;
    margin-bottom: 5%;
    border: none;
    background-color: #D9D9D9;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  input[type="submit"] {
    width: 100%;
    padding: 3%;
    border: none;
    background-color: #000000;
    color: #FFFFFF;
    font-size: 15%;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
  }
  
  input[type="submit"]:hover {
    background-color: #333333;
  }
  
  .add {
    margin-top: 10%;
  }
  
  .error-message {
    color: red;
  }
  
  .cuadred {
    display: flex;
  }
  
  .frame,
  .electric {
    display: flex;
    align-items: center; /* Alinear verticalmente */
    margin-right: 5%; /* Espacio entre los campos */
  }
  
  .frame label,
  .electric label {
    margin-right: 5%; /* Espacio entre el label y el input */
    
  }
  
  .frame select {
    flex: 1; /* El input ocupa todo el espacio restante */
    width: 125px;
    margin-top: 5%;
    
  }
  
  .electric input[type="checkbox"] {
    justify-content: flex-end;
    width: 50%;
    height: 50%;
  }
  
  input[type="submit"] {
    background-color: #3de161d2;
    margin-top: 1%;
  }
  
  

`;

const Edit = () => { //Edit es un componente funcional
  const { id } = useParams(); // Obtiene el parámetro id de la URL UseParams es un hook que nos permite acceder a los parámetros de la URL
  const { register, formState: { errors }, handleSubmit, reset, setValue, watch } = useForm(); // Utiliza el hook useForm para manejar el formulario
  const [loading, setLoading] = useState(false); // Utiliza el hook useState para guardar el estado de loading
  const [bicycleData, setBicycleData] = useState();// Utiliza el hook useState para guardar el estado de bicycleData

  useEffect(() => { // Utiliza el hook useEffect para hacer la petición a la API
    const fetchData = async () => { //fetchData es una función asíncrona que nos permite hacer la petición a la API
      const bicycleData = await getOneBicycle(id); //bicycleData es una constante que almacena el resultado de la petición a la API
      setBicycleData(bicycleData); //Usamos el método setBicycleData para guardar los detalles de la bicicleta en el estado

      setValue('model', bicycleData.model) // Utiliza el método setValue para actualizar el valor del campo model con el valor de bicycleData.model
      setValue('speeds', bicycleData.speeds) // Utiliza el método setValue para actualizar el valor del campo speeds con el valor de bicycleData.speeds
      setValue('frame', bicycleData.frame) // Utiliza el método setValue para actualizar el valor del campo frame con el valor de bicycleData.frame
      setValue('electric', bicycleData.electric) // Utiliza el método setValue para actualizar el valor del campo electric con el valor de bicycleData.electric
      setValue('image', bicycleData.image) // Utiliza el método setValue para actualizar el valor del campo image con el valor de bicycleData.image
    };

    fetchData(); // Llama a la función fetchData cuando el componente se monta
  }, [id, setValue]) // Le pasa el id y el método setValue como dependencias para que se ejecute cada vez que cambien

  const onSubmit = async (data) => { // Define una función asincrónica llamada onSubmit que recibe los datos del formulario
    try { // Utiliza un bloque try...catch para manejar errores
      setLoading(true); // Actualiza el estado de loading a true
      await updateItem(id, data); // Utiliza el id capturado de la URL
      alert('¡Los datos del elemento han sido actualizados correctamente!');// Muestra un mensaje de éxito
      reset();// Reinicia el formulario
    } catch (error) {// Maneja el error
      console.error('Error al actualizar el elemento:', error);// Muestra un mensaje de error en la consola
      alert('Error al actualizar el elemento. Por favor, intenta nuevamente.');// Muestra un mensaje de error
    } finally { 
      setLoading(false); // Actualiza el estado de loading a false
    }
  };
        
  return ( // Renderiza el formulario
    <StyledEdit>
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
        <input type="submit" value="Editar"/>
   </form>
    </StyledEdit>
);
}
           
export default Edit;