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

export const updateItem = async (id, newData) => {
  try {
    const response = await fetch(`http://localhost:3000/bicycles/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    });

    if (!response.ok) {
      throw new Error('Error updating item');
    }

    return response.json();
  } catch (error) {
    console.error('Error updating item:', error);
    throw error;
  }
};