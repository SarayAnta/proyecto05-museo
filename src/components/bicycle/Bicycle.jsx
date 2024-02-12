import React, { useState, useEffect } from 'react';

const App = () => {
   const [bicycles, setBicycles] = useState([]);

   useEffect(() => {
      fetch('http://localhost:3000/bicycles')
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data && data.bicycles) { // Verificar si data y data.bicycles no son undefined
               setBicycles(data.bicycles);
            }
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
      <div>
         {bicycles && bicycles.map((bicycle) => ( // Verificar si bicycles no es undefined
            <div key={bicycle.id}>
               <h3>{bicycle.model}</h3>
               <p>Velocidades: {bicycle.speeds}</p>
               <p>Material del marco: {bicycle.frame}</p>
               <p>Eléctrica: {bicycle.electric ? 'Sí' : 'No'}</p>
               <img src={bicycle.image} alt={bicycle.model} width={100} />
            </div>
         ))}
      </div>
   );
};

export default App;