import React from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import Nav from '../nav/Nav';
import Footer from '../footer/footer';


const StyledNewItem = styled.div`
body {
    max-height: 100%;
  }
  
  form {
    font-family: 'Jost', sans-serif;
    max-width: 400px;
    height: 62vh;
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
  
  .error {
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
  }
  
  .frame select {
    flex: 1; /* El input ocupa todo el espacio restante */
    width: 200px;
  }
  
  .electric input[type="checkbox"] {
    flex: 1; /* El input ocupa todo el espacio restante */
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

const NewItem = () => {

    const { register, formState: { errors }, handleSubmit, reset} = useForm();

    //Método POST

        //const onSubmit = async (data) => {: Esto define una función llamada onSubmit. Esta función toma un argumento llamado data, que contiene los datos del formulario.

        //try { ... }: try inicia un bloque de código en el que se puede manejar una excepción (error) si ocurre. Si no ocurre ningún error dentro de este bloque, el control pasa al bloque catch.

        //const response = await fetch('http://localhost:etc', { ... }): Usamos fetch para realizar una solicitud HTTP a la URL /api/nuevo-item en el servidor backend. fetch devuelve una promesa, y utilizamos await para esperar a que esta promesa se resuelva antes de continuar con la ejecución del código.

        //method: 'POST': Esto especifica que queremos hacer una solicitud POST al servidor.

        //headers: { 'Content-Type': 'application/json' }: Aquí configuramos los encabezados de la solicitud. Estamos diciendo que el cuerpo de la solicitud contendrá datos en formato JSON.

        //body: JSON.stringify(data): Este es el cuerpo de la solicitud. Aquí convertimos el objeto data en formato JSON utilizando JSON.stringify(). Esto es necesario porque fetch solo puede enviar datos en formato de texto plano.

    const onSubmit = async (data) => { 
        try {
            const response = await fetch('http://localhost:3000/bicycles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                // Mostrar mensaje de éxito
                alert('¡Tu bicicleta fue añadida correctamente!');
                // Reiniciar el formulario
                reset();
            } else {
                // Manejar errores de la respuesta
                alert('Hubo un problema al añadir tu bicicleta. Por favor, intenta de nuevo más tarde.');
            }
        } catch (error) {
            // Manejar errores de conexión
            console.error('Error:', error);
            alert('Hubo un problema al añadir tu bicicleta. Por favor, intenta de nuevo más tarde.');
        }
    }
        
    return (
        <StyledNewItem>
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
        </StyledNewItem>
    );
            }
           
export default NewItem;
