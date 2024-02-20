import React, { useState } from "react";
import axios from "axios"

function UploadImage () ´{
    const [Url_Image, setUrl_Image] = useState("");
    const changeUploadImage

    return <>
    <h1>Seleccionar imagen para cloudinary</h1>
    <div>
        <input type="file" accept="image/*" />
        <div>
            <img src={Url_Image} alt="" />
        </div>
    </div>
    </>
}