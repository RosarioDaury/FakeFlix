import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../Context/ModalContext";
import { Card, Picture } from "./Commons/Components";

export const CardCarousel = ({serie}) => {
    const {showModal} = useContext(ModalContext);
    const navigate = useNavigate();
    return(
        <div onClick={() => showModal(serie.trailer, serie.name, navigate, serie.description, serie.image)}>
                <Card key={serie.id}>
                    <Picture src={serie.image} alt={serie.name}/>
                </Card>
        </div>
    )
}