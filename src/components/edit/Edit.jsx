import React, { useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { updateItem, getOneBicycle } from '../../services/service';
import { useParams } from 'react-router';

const StyledEdit = styled.div`
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

const Edit = () => {
  const { id } = useParams(); // Obtiene el parámetro id de la URL
  const { register, formState: { errors }, handleSubmit, reset, setValue, watch } = useForm();
  const [loading, setLoading] = useState(false);
  const [bicycleData, setBicycleData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const bicycleData = await getOneBicycle(id);
      setBicycleData(bicycleData);

      setValue('model', bicycleData.model)
      setValue('speeds', bicycleData.speeds)
      setValue('frame', bicycleData.frame)
      setValue('electric', bicycleData.electric)
      setValue('image', bicycleData.image)
    };

    fetchData();
  }, [id, setValue])

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await updateItem(id, data); // Utiliza el id capturado de la URL
      alert('¡Los datos del elemento han sido actualizados correctamente!');
      reset();
    } catch (error) {
      console.error('Error al actualizar el elemento:', error);
      alert('Error al actualizar el elemento. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };
        
  return (
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