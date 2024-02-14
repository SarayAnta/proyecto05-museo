import React from 'react';
import { useForm } from "react-hook-form";
import Nav from '../nav/Nav';
import styled from 'styled-components';
import Footer from '../footer/footer';

// Corregido el nombre de la constante StyledNewItem
const StyledNewItem = styled.div`
  body {
    margin: 0;
  }
  
  form {
    font-family: 'Jost', sans-serif;
    max-width: 400px;
    height: 439px;
    margin: auto;
    margin-top: 2%;
    padding: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 0.5%;
    margin-top: 5%;
  }
  
  .model, .speeding, select {
    background-color: #d9d9d9;
  }
  
  input, select {
    width: 100%;
    padding: 8px;
    margin-top: 3px;
    box-sizing: border-box;
  }
  
  .add {
    width: 20vh;
    background-color: #6aa877;
    margin-left: 35%;
    margin-top: 3%;
    font-family: 'Jost', sans-serif;
    font-size: 18px;
    font-weight: bolder;
    border-radius: 10px;
  }
  
  .cuadred {
    display: flex;
    align-items: center;
    margin-top: 3%;
  }
  
  .electric {
    margin-left: 10%;
  }
  
  .frame {
    width: 70%;
  }
`;

const NewItem = () => {

    const { register, formState: { errors }, handleSubmit, reset} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Mostrar mensaje de éxito
        alert('¡Tu bicicleta fue añadida correctamente!');
        // Reiniciar el formulario
        reset();
    }
        
    return <>
        <Nav/>  
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Modelo</label>
                <input className='model' type="text" {...register('modelo', {
                    required: true,
                })}/>
                {errors.modelo?.type === 'required' && <p>El campo modelo es requerido</p>}
            </div>
            <div>
                <label>Velocidades</label>
                <input className='speeding' type="text" {...register('velocidades', {
                    required: true,
                })}/>
                {errors.velocidades?.type === 'required' && <p>El campo velocidades es requerido</p>}
            </div>
            <div className='cuadred'>
                <div className='frame'>
                    <label>Cuadro</label>
                    <select {...register('cuadro')}>
                        <option value="al">Aluminio</option>
                        <option value="ace">Acero</option>
                        <option value="car">Carbono</option>
                        <option value="ot">Otros</option>
                    </select>
                </div>
                <div className='electric'>
                    <label>Eléctrica</label>
                    <input className="checkbox-css" type="checkbox" {...register('eléctrica')} />
                </div>
            </div>
            <div>
                <label htmlFor="imageUpload">Img URL</label>
                <input type="text" {...register('imageUpload', {
                pattern: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                required:true,
                })}/>
                {errors.imageUpload?.type === 'pattern' && <p>El formato de la url de la imagen es incorrecto</p>}
                {errors.imageUpload?.type === 'required' && <p>El campo url de la imagen es requerido</p>}
            </div>
            <input type="submit" value="Añadir"/>
        </form>
        <Footer/>
    </>
            }
           
export default NewItem;
