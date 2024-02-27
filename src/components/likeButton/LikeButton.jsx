


const LikeContainer = styled.div`
    .like {
        width: 1vw;
        height: 1vh;
        margin: 0 0 0 0;
        padding: 0 0 0 0;
    }

    .like:hover {
        transform: scale(1.1);
        transition: 0.5s;
    }

    .like:active {
        transform: scale(0.9);
        transition: 0.5s;
        color: red;
    }
`;

function CounterLikes() {
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => { // Utiliza el hook useEffect para hacer la petición a la API
    const fetchData = async () => { //fetchData es una función asíncrona que nos permite hacer la petición a la API
      const bicycleData = await getOneBicycle(id); //bicycleData es una constante que almacena el resultado de la petición a la API
      const likesData = await getLikes(id); //likesData es una constante que almacena el resultado de la petición a la API

      setLikes(likesData); //Usamos el método setLikes para guardar los likes de la bicicleta en el estado
    };

    fetchData(); // Llama a la función fetchData cuando el componente se monta
  }, [id]) // Le pasa el id como dependencia para que se ejecute cada vez que cambie

  const onLikes = async (data) => { // Define una función asincrónica llamada onLikes que recibe los datos del formulario
    try { // Utiliza un bloque try...catch para manejar errores
      setLoading(true); // Actualiza el estado de loading a true
      await updateItem(id, data); // Utiliza el id capturado de la URL
    } finally {
      setLoading(false); // Actualiza el estado de loading a false
    }
  };

  const handleLike = () => {
    // Incrementa los likes en el estado local
    setLikes(likes + 1);

    // Luego, envía una solicitud PUT o PATCH para actualizar los likes en la base de datos
    axios.put(`/server/db.json/${bicyles.Id}`, { likes: likes + 1 })
      .catch(error => {
        console.error('Hubo un error al actualizar los likes en la base de datos', error);
        // Si hay un error, revierte los likes en el estado local
        setLikes(likes);
      });
  };

  // ...otro código...

  return (
    <div>
      <button className="like-button" onDoubleClick={handleLike(CounterLikes)}>Me gusta</button>
      <p className="like-counter">{likes}</p>
    </div>
  );
};


export { LikeContainer };
export { CounterLikes };
export { LikeButton };


/*


function LikeButton() {
        const [likes, setLiked] = useState(false);
      
        const handleLike = () => {
          setLikes(likes + 1);
        };
      
        return (
          <div className="like-container">
            <img src="" alt="Descripción de la foto" />
            <button className="like-button" onClick={handleLike}>
              {liked ? "Me gusta" : "No me gusta"}
            </button>
          </div>
        );
      }
      
      export default LikeButton;


    function BicycleLikes() {
        const [likes, setLikes] = useState(0);
      
        const handleLike = () => {
          setLikes(likes + 1);
        };
      
        return (
          <div className="bicycle-container">
            <img src="ruta/a/tu/foto.jpg" alt="Descripción de la foto" />
            <button className="like-button" onDoubleClick={handleLike}>Me gusta</button>
            <p className="like-counter">{likes}</p>
          </div>
        );
      }
      
      export default BicycleLikes ()

    return (
        <>
            <LikeContainer className='like'>
                <img src="../assets/img/like.png" alt="like" />
            </LikeContainer>
        </>
    );
*/