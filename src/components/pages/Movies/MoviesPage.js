import RowsOfMovies from './../RowsOfMovies/RowsOfMovies.tsx';
import requests from "./../../../API/Api";

const MoviesPage = () => {

    return(
        <>
            <h1>MoviesPage</h1>
            <RowsOfMovies fetchUrl={requests.fetchComedyMovies}/>
        </>
    )
}

export default MoviesPage;