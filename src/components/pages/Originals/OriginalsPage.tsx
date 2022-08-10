import { useState, useEffect } from 'react';
import './OriginalsPage.css';

import MovieSliderRow from "../Home/HomeComponents/MovieSlidersComponents/MovieSliderRow";
import requests from "../../../API/Api";

const OriginalsPage = () => {

    const [giveOnScrollClass, setGiveOnScrollClass] = useState<boolean>(false);
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    useEffect(()=>{
        if(scrollPosition < 1){
            setGiveOnScrollClass(false);
        }else if(scrollPosition >= 1){
            setGiveOnScrollClass(true);
        }
    },[scrollPosition])

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className="originals-container">
            <header className={`${giveOnScrollClass && "header-after-scroll"}`}>
                <h2 className={`originals-headline ${giveOnScrollClass ? "originals-headline-after-scroll" : "originals-headline-initial"}`}>ORIGINALS</h2>
            </header>
            <div className="originals-sliders-container">
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