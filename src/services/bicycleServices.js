//Petición GET
export const getBicycles = async () => {
    const response = await fetch('http://localhost:3000/cuadros');
    const data = await response.json();
    return data;
}

//Petición POST
const createBicycles = () => {

}

//Petición UPDATE
const updateBicycles = () => {

}

//Petición DELETE
const deleteBicycles = () => {

}