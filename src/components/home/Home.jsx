import React, { useState, useEffect } from 'react';
import './home.css';
import BackgroundHome from '../../assets/img/BackgroundHome.png'
import Nav from '../nav/Nav';
<<<<<<< HEAD
import Footer from '../footer/footer';
=======
import Footer from '../footer/Footer';
import { useNavigate } from "react-router-dom";
>>>>>>> c042dcabc1f8bbb1ef72893f310d96fe9adb087d


const Home = () => {
  const [bicycles, setBicycles] = useState([]);

  useEffect(() => {
    const fetchBicycles = async () => {
      try {
        const response = await fetch('http://localhost:3000/bicycles');
        const data = await response.json();
        setBicycles(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching bicycles:', error);
      }
    };

    fetchBicycles();
  }, []);
  console.log(bicycles)
  const navigate = useNavigate();
  return (
    <>
        <Nav/>
        <img src={BackgroundHome} alt="Imagen de fondo de una chica apoyada sobre una bicicleta azul"/>
        <div>
          <h2>Modelos de bicicletas:</h2>
            {bicycles.map((bicycle) =>(
      <section className='gallery'>
            <div className='gallerygrid '>
              <img className="bicyclesimg" src={bicycle.image}/>
              <p key={bicycle.id}>{bicycle.model}</p>
            </div>
            <button onClick={() => navigate("/Edit")}>
     <img className="editbutton" src="src\assets\img\Edit.png"></img>
     </button> 
     <button>
     <img className="deletebutton" src="src\assets\img\Delete.png"></img>
     </button>   
        </section>  
            ))}
            
        </div>
        <Footer/>  
    </>
  )
}

export default Home