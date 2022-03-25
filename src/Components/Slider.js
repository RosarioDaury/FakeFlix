import { useContext, useRef} from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../Context/ModalContext";
import {ImageSlider} from "./Commons/Components";
import styled from "styled-components";


export const Slider = ({data}) => {
    const {showModal} = useContext(ModalContext);
    const navigate = useNavigate();
    const ref = useRef();

    setInterval(() => {
        if (!ref.current) return;

        const conteiner = ref.current;


        let adding = conteiner.scrollWidth / 3;

        console.log(conteiner.scrollLeft + conteiner.clientWidth);
        console.log(conteiner.scrollWidth);
    
        if(conteiner.scrollLeft + conteiner.clientWidth >= conteiner.scrollWidth - 300){
            conteiner.scrollTo({
                behavior: "smooth",
                left: 0,
            })
        }else{
            conteiner.scrollTo({
                behavior: "smooth",
                left: conteiner.scrollLeft + adding,
            })
        }
    }, 10000);

    const ConteinerSlider = styled.div`
        width:750px;
        height:500px;
        display: flex;
        overflow-x: scroll;
        margin: 2rem auto;
        flex-shrink: 0;
        border-radius: 5px;
        scroll-behavior: smooth;
        scroll-snap-type: x mandatory;  

        &::-webkit-scrollbar{
            background-color: rgb(156, 155, 155, .3);
            border-radius: 20px;
        }

        &::-webkit-scrollbar-thumb{
            background-color: rgb(156, 155, 155, .6);
            border-radius: 20px;
        }

        @media (max-width: 660px){
        width: 550px; 
        height: 400px;
        }

        @media (max-width: 550px){
        width: 350px;
        }
    `
    
    return(
        <>
            <h2 style={{color:"white", textAlign:"center"}}>Trending Now</h2>
            <ConteinerSlider ref={ref}>
                {data && data.map((doc, index) => <ImageSlider key={index} onClick={() => showModal(doc.trailer, doc.name, navigate, doc.description, doc.image)} src={doc.image} alt={doc.name} style={{}}/>)}
            </ConteinerSlider>
        </>  
    )
}