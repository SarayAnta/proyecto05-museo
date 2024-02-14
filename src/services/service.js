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