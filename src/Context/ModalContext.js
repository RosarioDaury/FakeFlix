import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({children}) => {
    const [endPoint, setEndPoint] = useState("");
    const [name , setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const showModal = (url, name, navigate, description, image) => {
        setEndPoint(url);
        setName(name);
        setDescription(description);
        setImage(image);
        navigate(`/modal/${name}`)
    } 

    const data = {name, endPoint, showModal, description, image};


    return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>
}