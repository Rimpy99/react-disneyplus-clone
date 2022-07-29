import './MovieSliders.css';

import MovieSliderRow from "./MovieSlidersComponents/MovieSliderRow";
import requests from "../../../../API/Api";

const MovieSliders = () => {

    return (
        <div className="movie-sliders-container">
            <MovieSliderRow title={"Top Rated"} fetchUrl={requests.fetchTopRated}/>
            <MovieSliderRow title={"Action Movies"} fetchUrl={requests.fetchActionMovies}/>
            <MovieSliderRow title={"Comedies"} fetchUrl={requests.fetchComedyMovies}/>
            <MovieSliderRow title={"Horrors"} fetchUrl={requests.fetchHorrorMovies}/>
        </div>
    )
}

export default MovieSliders;