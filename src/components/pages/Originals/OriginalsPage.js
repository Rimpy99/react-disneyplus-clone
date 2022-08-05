import { useState } from 'react';
import './OriginalsPage.css';

import MovieSliderRow from "./../Home/HomeComponents/MovieSlidersComponents/MovieSliderRow";
import requests from "../../../API/Api";

const OriginalsPage = () => {

    const [giveOnScrollClass, setGiveOnScrollClass] = useState(false);

    const giveHeaderOnScrollClass = () => {
        if(window.scrollY === 0){
            setGiveOnScrollClass(false);
        }else{
            setGiveOnScrollClass(true);
        }
    }

    window.addEventListener('scroll', giveHeaderOnScrollClass);

    return(
        <div className="originals-container">
            <header className={`${giveOnScrollClass && "header-after-scroll"}`}>
                <h2 className={`originals-headline ${giveOnScrollClass ? "originals-headline-after-scroll" : "originals-headline-initial"}`}>ORIGINALS</h2>
            </header>
            <div originals-sliders-container>
                <MovieSliderRow title={"Top Rated"} fetchUrl={requests.fetchTopRated}/>
                <MovieSliderRow title={"Action Movies"} fetchUrl={requests.fetchActionMovies}/>
                <MovieSliderRow title={"Comedies"} fetchUrl={requests.fetchComedyMovies}/>
                <MovieSliderRow title={"Horrors"} fetchUrl={requests.fetchHorrorMovies}/>
                <MovieSliderRow title={"Action Movies"} fetchUrl={requests.fetchActionMovies}/>
            </div>
        </div>
    )
}

export default OriginalsPage;