import axios from 'axios';

//Método GET
export const getBicycles = async () => {  //Declaramos una función asíncrona llamada getBicycles que nos permite hacer la petición a la API
    try {  //Usamos try para manejar errores
      const response = await fetch('http://localhost:3000/bicycles'); //Usamos el método fetch para hacer la petición a la API y almacenamos la respuesta en la constante response
      const data = await response.json(); //Usamos el método json() para convertir la respuesta en un objeto JSON y lo almacenamos en la constante data 
      return data //Retornamos la constante data que contiene los datos de las bicicletas
    } catch (error) { //Usamos catch para manejar errores y mostramos un mensaje de error en la consola
      console.error('Error fetching bicycles:', error); //Mostramos un mensaje de error en la consola
    }
  };
//Método DELETE
export    const deleteBicycle = async (id) => {  //Definimos una función asíncrona llamada deleteBicycle que recibe un parámetro id que representa el ID de la bicicleta que queremos eliminar
    const response = await fetch(`http://localhost:3000/bicycles/${id}`, { //Usamos el método fetch para hacer la petición a la API y almacenamos la respuesta en la constante response
      method: 'DELETE'//Especificamos que esta es una solicitud de tipo DELETE
    });
};

//Método POST
export const addBicycle = async (data) => { //Definimos una función asíncrona llamada addBicycle que recibe un parámetro data que representa los datos de la bicicleta que queremos añadir
  try {
      const response = await fetch('http://localhost:3000/bicycles', { //Usamos el método fetch para hacer la petición a la API y almacenamos la respuesta en la constante response
          method: 'POST', //Especificamos que esta es una solicitud de tipo POST 
          headers: { //Especificamos el tipo de contenido que estamos enviando en la solicitud
              'Content-Type': 'application/json'//Especificamos que estamos enviando un objeto JSON 
          },
          body: JSON.stringify(data)//Convertimos el objeto data a un objeto JSON y lo enviamos en la solicitud
      });

      if (response.ok) { //Verificamos si la respuesta es exitosa
          return { success: true };
      } else { //Si la respuesta no es exitosa
          return { success: false, error: 'Hubo un problema al añadir tu bicicleta. Por favor, intenta de nuevo más tarde.' };
      }
  } catch (error) { //Usamos catch para manejar errores
      console.error('Error:', error);
      return { success: false, error: 'Hubo un problema al añadir tu bicicleta. Por favor, intenta de nuevo más tarde.' };
  }
};
//get para introducir datos en el formulario de editar
export const getItemById = async (id) => { //Definimos una función asíncrona llamada getItemById que recibe un parámetro id que representa el ID de la bicicleta que queremos obtener
  try {
    const response = await fetch(`http://localhost:3000/bicycles/${id}`);
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching bicycles:', error);
  }
};
//Método PUT
export const updateItem = async (id, newData) => { //Definimos una función asíncrona llamada updateItem que recibe dos parámetros: id que representa el ID de la bicicleta que queremos actualizar y newData que representa los nuevos datos de la bicicleta
  try {
    const response = await fetch(`http://localhost:3000/bicycles/${id}`, {
      method: 'PUT',//Especificamos que esta es una solicitud de tipo PUT
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    });

    if (!response.ok) { //Verificamos si la respuesta no es exitosa
      throw new Error('Error updatingItem'); //Lanzamos un error si la respuesta no es exitosa
    }

    return response.json(); //Retornamos la respuesta de la API
  } catch (error) { //Usamos catch para manejar errores
    console.error('Error updatingItem:', error);//Mostramos un mensaje de error en la consola
    throw error;//Lanzamos el error
  }
};

//Método GET para una bicicleta

//Método GET
export const getOneBicycle = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/bicycles/${id}`);
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching bicycles:', error);
  }
};

//trying to add uploadimage

export const uploadImage = async (imageData) => {
  try {
    const response = await axios.post(
      "http://api.cloudinary.com/v1_1/dlg7gpmha/image/upload", //http://api.cloudinary/v1_1 (siempre necesario tal cual para la carga de archivos) / nombre de usuario/ image/upload
      imageData
    );
    return response.data;
  } catch (error) {
    throw new Error("Error al cargar la imagen en Cloudinary: " + error.message);
  }
};

// // Método para eliminar una imagen de Cloudinary
export const deleteImage = async (imageUrl) => {
  try {
      const response = await fetch(`http://api.cloudinary.com/v1_1/dlg7gpmha/image/destroy?url=${imageUrl}`, {
          method: 'DELETE',
          headers: {
              'Authorization': 'Bearer 814857226871881', // Aquí se incluye tu API Key de Cloudinary
          },
      });
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error deleting image from Cloudinary:', error);
      throw new Error('Error deleting image from Cloudinary');
  }
};