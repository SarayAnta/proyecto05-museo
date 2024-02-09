import React from 'react';
import { useForm } from "react-hook-form";
import Nav from '../nav/Nav';
import './newitem.css';
import Footer from '../footer/Footer';

const NewItem = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
    <>
      <Nav/>      
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Modelo</label>
                <input type="text" {...register('modelo')}/>
            </div>
            <div>
                <label>Velocidades</label>
                <input type="text" {...register('velocidades')}/>
            </div>
            <div>
                <label>Cuadro</label>
                <select {...register('cuadro')}>
                    <option value="al">Aluminio</option>
                    <option value="ace">Acero</option>
                    <option value="car">Carbono</option>
                    <option value="ot">Otros</option>
                </select>
            </div>
            <div>
                <label>Eléctrica</label>
                <input type="checkbox" {...register('eléctrica')} />
            </div>
            <div>
                <label htmlFor="imageUpload">Img URL</label>
                <input
                type="file"
                accept="image/*"
                />
            </div>
            <input type="submit" value="Añadir"/>
        </form>
    <Footer/>
    </>
)}

export default NewItem;