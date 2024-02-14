export const getBicycles = async () => {
    try {
      const response = await fetch('http://localhost:3000/bicycles');
      const data = await response.json();
      return data
    } catch (error) {
      console.error('Error fetching bicycles:', error);
    }
  };

export    const deleteBicycle = async (id) => {
    const response = await fetch(`http://localhost:3000/bicycles/${id}`, {
    method: 'DELETE'});
    return response;
};

//Método POST

export const postBicycle = async (data) => {
  try {
      const response = await fetch('http://localhost:3000/bicycles', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });

      if (response.ok) {
          return { success: true };
      } else {
          return { success: false, error: 'Hubo un problema al añadir tu bicicleta. Por favor, intenta de nuevo más tarde.' };
      }
  } catch (error) {
      console.error('Error:', error);
      return { success: false, error: 'Hubo un problema al añadir tu bicicleta. Por favor, intenta de nuevo más tarde.' };
  }
};
