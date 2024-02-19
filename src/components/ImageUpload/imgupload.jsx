import React, { useState } from "react";
import { Container, FormGroup, Input } from "reactstrap";

const ImageUpload = (props) => {
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const upLoadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        // Establecer el nombre de la carpeta en Cloudinary
        data.append("upload_bicycle", "bicycles-museum")
        setLoading(true);
        const res = await fetch("https://api.cloudinary.com/v1_1/dlg7gpmha/bicycles-museum/upload", {
            method: "POST",
            body: data,
        });
        const file = await res.json();
        setImage(file.secure_url);
        setLoading(false);
    }

    return (
        <> 
            <Container>
                <h1>SUBIENDO IMÁGENES</h1>
                <FormGroup>
                    <Input type="file" name="file" id="exampleFile" placeholder='Sube tu imagen aquí' onChange={upLoadImage} />
                    <label htmlFor="exampleFile">Selecciona una imagen</label>
                </FormGroup>
                {image && (
                    <div>
                        <h2>Imagen cargada:</h2>
                        <img src={image} alt="Uploaded" />
                    </div>
                )}
                {loading && <p>Cargando...</p>}
            </Container>
        </>
    );
}

export default ImageUpload;