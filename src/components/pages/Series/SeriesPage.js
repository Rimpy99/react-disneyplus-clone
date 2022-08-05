import RowsOfMovies from './../RowsOfMovies/RowsOfMovies.tsx';
import requests from "./../../../API/Api";

const SeriesPage = () => {

    return(
        <>
            <h1>SeriesPage</h1>
            <RowsOfMovies fetchUrl={requests.fetchComedyMovies}/>
        </>
    )
}

export default SeriesPage;