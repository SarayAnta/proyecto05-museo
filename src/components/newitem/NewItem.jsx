import React from 'react';
import { useForm } from "react-hook-form";
import Nav from '../nav/Nav';
import './newitem.css';
import Footer from '../footer/Footer';

const NewItem = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
    <>
      <Nav/>      
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Modelo</label>
                <input className='model' type="text" {...register('modelo', {
                    required: true,
                    minLength: 5
                })}/>
                {errors.modelo?.type === 'required' && <p>El campo modelo es requerido</p>}
                {errors.modelo?.type === 'minLength' && <p>El campo modelo debe tener más de 5 caracteres</p>}
            </div>
            <div>
                <label>Velocidades</label>
                <input className='speeding' type="text" {...register('velocidades')}/>
            </div>
            <div className='cuadred'>
                <div className='frame cuadred'>
                    <label>Cuadro</label>
                    <select {...register('cuadro')}>
                        <option value="al">Aluminio</option>
                        <option value="ace">Acero</option>
                        <option value="car">Carbono</option>
                        <option value="ot">Otros</option>
                    </select>
                </div>
                <div className='electric cuadred'>
                    <label>Eléctrica</label>
                    <input className="checkbox-css" type="checkbox" {...register('eléctrica')} />
                </div>
            </div>
            <div>
                <label htmlFor="imageUpload">Img URL</label>
                <input
                type="file"
                accept="image/*"
                />
            </div>
            <input type="submit" value="Añadir" className='add'/>
        </form>
    <Footer/>
    </>
)}

export default NewItem;