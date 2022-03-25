import { useRef } from 'react';
import { BigOne } from './BigOne';
import { CardCarousel } from './CardCarousel';
import { Conteiner, Next, Prev} from './Commons/Components';

export const Carousel = ({data, category}) => {

    const ref = useRef();

    const scrollNext = (e) => {
        const conteiner = ref.current;


        let adding = conteiner.scrollWidth / 8;
    
        if(conteiner.scrollLeft + conteiner.clientWidth >= conteiner.scrollWidth - 10){
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
    }

    const scrollPrev = (e) => {
        const conteiner = ref.current;


        let adding = conteiner.scrollWidth / 6;
    
        if(conteiner.scrollLeft < 15){
            conteiner.scrollTo({
                behavior: "smooth",
                left: conteiner.scrollWidth,
            })
        }else{
            conteiner.scrollTo({
                behavior: "smooth",
                left: conteiner.scrollLeft - adding,
            })
        }
    }



    return(
        <>
            <br/>
            <h2 style={{color:"white", textAlign:"center"}}>{category}</h2>
            <BigOne image={data[3].image} name={data[3].name} description={data[3].description} url={data[3].trailer}/>
            <h2 style={{color:"white", textAlign:"center"}}>For You on -{category}-</h2>
            <div style={{position:"relative"}}>
                <Conteiner ref={ref}>
                    {data.map(serie => 
                    <CardCarousel key={Math.floor(Math.random() * 10000)} serie={serie}/>)
                    }       
                </Conteiner>
                <Next onClick={scrollNext}>{">"}</Next>
                <Prev onClick={scrollPrev}>{"<"}</Prev>
            </div>
            <br/>
            <br/>
            <br/>
            <hr width="90%" color='gray'/>
            <br/>
        </>
        
    )
}