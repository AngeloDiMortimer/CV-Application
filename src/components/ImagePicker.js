import React, { useCallback, useState } from "react";

const ImagePicker = () => {
    const [logo, setLogo] = useState("");

    const handleCreateBase64 = useCallback(async (e) =>{
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setLogo(base64);
        e.target.value = "";
    }, []);

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            if(!file) {
                alert("Plase select an image");
            } else {
                fileReader.readAsDataURL(file);
                fileReader.onload = () => {
                    resolve(fileReader.result);
                }
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    return (
        <div>
            <label htmlFor="contained-button-file">
                {logo ? (
                    <span>
                        <div>
                            <img src={logo} alt="logo" />
                        </div>
                    </span>
                ): null}
            </label>
            <input
                id="contained-button-file"
                type="file"
                accept="image/*, png, jpeg, jpg"
                onChange={handleCreateBase64}     
            />
        </div>
    );
}

export default ImagePicker;