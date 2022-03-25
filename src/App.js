import { Carousel} from "./Components/Carousel";
import {HashRouter, Routes, Route, NavLink} from "react-router-dom";
import styled from "styled-components";
import { Main } from "./Pages/Main";
import { MOVIES, SERIES, ANIMES, NOVELAS } from "../src/Data/StaticData";
import { Video } from "./Components/Modal";


function App() {

  const Header = styled.div`
    position: sticky;
    top: 0;
    width: 100vw;
    height: 15vh;
    background: rgb(50, 50, 50);
    display: flex;
    justify-content: space-around;
    align-items : center;
    margin: 0 auto;
    z-index: 999;

    @media (max-width: 400px){
      width: 90vw;
      position: static;

    }

    @media (max-width: 550px){
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 65vh;
      position: static;
    }

    @media (max-width: 660px){
      justify-content: left;
    }


  `

  const Logo = styled.div`
    color: rgb(255, 0, 0, .7);
    text-decoration: none;
    padding: .5rem;
    transition: all 0.5s ease-in-out;

    &:hover{
      transform: scale(1.2);
      color: rgb(255, 0, 0);  
    }
  `

  const Categs = styled.p`
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: lighter;
    font-size: 1.3rem;
    box-shadow: inset 0 0 0 0 rgb(156, 155, 155, .3);
    transition: color .8s ease-in-out, box-shadow .3s ease-in-out;
    padding: .25rem 2.5rem;
    border-radius: 5px;

    &:hover{
      color: #fff;
      box-shadow: inset 400px 0 0 0 rgb(156, 155, 155, .3);
    }

    @media (max-width: 550px){
        padding: .25rem 7rem;
    }
  `

  return (
    <div className="App" style={{boxSizing: "border-box"}}>
        <HashRouter>
          <Header>
            <NavLink to="/"><Logo><h1>Fake-Flix</h1></Logo></NavLink>
              <NavLink to="/series"><Categs>Series</Categs></NavLink>
              <NavLink to="/movies"><Categs>Movies</Categs></NavLink>
              <NavLink to="/animes"><Categs>Anime</Categs></NavLink>
              <NavLink to="/novelas"><Categs>Novelas</Categs></NavLink>
          </Header>
          <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route exact path="/series" element={<> <Carousel data={SERIES} category="Series"/> <Carousel data={SERIES} category="Series"/> </>}/>
            <Route exact path="/movies" element={<> <Carousel data={MOVIES} category="Movies"/> <Carousel data={MOVIES} category="Movies"/> </>}/>
            <Route exact path="/animes" element={<> <Carousel data={ANIMES} category="Anime"/> <Carousel data={ANIMES} category="Anime"/> </>}/>
            <Route exact path="/novelas" element={<> <Carousel data={NOVELAS} category="Novelas"/> <Carousel data={NOVELAS} category="Anime"/> </>}/>
            <Route exact path="/modal/:name" element={<Video/>}/>
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
