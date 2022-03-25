import { Carousel } from "../Components/Carousel";
import { Footer } from "../Components/Footer";
import { Slider } from "../Components/Slider";
import { MOVIES, SERIES, ANIMES, SLIDER, NOVELAS } from "../Data/StaticData";


export const Main = () => {
    return(
        <>
            <Slider data={SLIDER}/>
            <Carousel data={MOVIES} category="Movies"/>
            <Carousel data={SERIES} category="Series"/>
            <Carousel data={ANIMES} category="Anime"/>
            <Carousel data={NOVELAS} category="Novelas"/>
            <Footer/>
        </> 
    )
} 