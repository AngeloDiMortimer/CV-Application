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

    const openFileSelection = () => {
        const button = document.getElementById("contained-button-file");
      
        button.click()
      }

    return (
        <div>               
                {logo ? (
                    <span>
                        <div className="relative w-36 h-36 rounded-full hover:brightness-50
                                hover:cursor-pointer">
                            <img src={logo} alt="logo" className="rounded-full object-cover "
                                onClick={openFileSelection}
                            />
                            
                        </div>
                    </span>
                ): (
                    <div className="w-36 h-36 bg-slate-100 rounded-full hover:cursor-pointer hover:brightness-50" onClick={openFileSelection}></div>
                )}

            <input
                className="hidden"
                id="contained-button-file"
                type="file"
                accept="image/*, png, jpeg, jpg"
                onChange={handleCreateBase64}     
            />
        </div>
    );
}

export default ImagePicker;