import axios from "axios";
import React, { useState } from "react";

function UploadImage() {
    const [Url_Image, setUrl_Image] = useState("");

    const changeUploadImage = async (e) => {
        const file = e.target.files[0];
        const data = new FormData(); // Corregido el nombre de FormData

        data.append("file", file);
        data.append("upload_preset", "Presents_react");

        try {
            const response = await axios.post(
                "http://api.cloudinary.com/v1_1/dlg7gpmha/image/upload",
                data
            );
            console.log(response.data);
            setUrl_Image(response.data.secure_url);
        } catch (error) {
            console.error("Error al cargar la imagen:", error);
        }
    };

    return (
        <>
            <h1>Seleccionar imagen para Cloudinary</h1>
            <div>
                <input type="file" accept="image/*" onChange={changeUploadImage} />
                {Url_Image && (
                    <div>
                        <img src={Url_Image} alt="Uploaded" />
                        <button>Eliminar imagen</button>
                    </div>
                )}
            </div>
        </>
    );
}

export default UploadImage;