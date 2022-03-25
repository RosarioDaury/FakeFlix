import styled from "styled-components";

export const Conteiner = styled.div`
display: flex;
overflow-x: scroll;
scroll-behavior: smooth;
scroll-snap-type: x mandatory;
width: 90%;
height:auto;
margin: 2rem auto;

&::-webkit-scrollbar {
    color:transparent;
}
`;

export const Card = styled.div`
width: 150px;
height: 250px;
margin: 10px;
background-color: rgb(156, 155, 155, .4);
flex-shrink: 0;
scroll-snap-align: start;
`;

export const Next = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 240px;
width: 40px;
top: 5%;
right: 5%;
color: white;
font-size: 2rem;
background: rgb(156, 155, 155, .4);
&:hover{
    cursor: pointer;
    background: rgb(156, 155, 155, .7);
}
`

export const Prev = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 240px;
width: 40px;
top: 5%;
left: 5%;
color:white;
font-size:2rem;
background: rgb(156, 155, 155, .4);
&:hover{
    cursor: pointer;
    background: rgb(156, 155, 155, .7);
}
`

export const Picture = styled.img`
width: 150px;
height: 250px;

&:hover{
    border: 2px solid white;
    cursor: pointer;
}
`

export const One = styled.div`
    width: 90vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 4rem auto;
    background: rgb(156, 155, 155, .3);
    padding-top: 2rem;
    padding-bottom: 2rem;

    @media (max-width: 550px){
        width: 80vw;
        height: auto;
        flex-direction: column;
    }
`

export const BigPhoto = styled.img`
    width: 500px;
    height: 600px;

    @media (max-width: 850px){
        width: 350px;
        height: 450px;
    }

    @media (max-width: 660px){
        width: 250px;
        height: 350px;
    }
`

export const Modal = styled.div`
    width:90vw;
    height:500px;
    margin: 1rem auto;

    @media (max-width: 500px){
        width: 400px;
    }
`

export const Link = styled.a`
    padding: 1rem;
    background: rgb(156, 155, 155, .3);

    &:hover{
        background: rgb(156, 155, 155, .7)
    }
`

export const ImageSlider = styled.img`
    width: 750px;
    height: 470px;
    margin: 0 10px;
    border-radius: 5px;
    scroll-snap-align: start;

    &:hover{
        border: 2px solid white;
        cursor: pointer;
    }   

    @media (max-width: 660px){
      width: 550px;
      height: 370px;
    }

    @media (max-width: 550px){
      width: 350px;
    }
`