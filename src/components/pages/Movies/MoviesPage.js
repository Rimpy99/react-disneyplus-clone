import RowsOfMovies from './../RowsOfMovies/RowsOfMovies.tsx';
import requests from "./../../../API/Api";

const MoviesPage = () => {

    return(
        <>
            <RowsOfMovies fetchUrl={requests.fetchComedyMovies} title={"Movies"}/>
        </>
    )
}

export default MoviesPage;