import { useContext } from "react";
import { ModalContext } from "../Context/ModalContext";
import { Modal } from "./Commons/Components";
import { BigOne } from './BigOne';


export const Video = () => {
    const {endPoint, name, description, image} = useContext(ModalContext);
    return(
            <Modal>
                    <h2 style={{textAlign:"center"}}>{name} - Official Trailer</h2>
                    <BigOne image={image} name={name} description={description} url={endPoint}/>
            </Modal>          
    )
}