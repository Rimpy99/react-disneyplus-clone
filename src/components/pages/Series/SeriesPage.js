import RowsOfMovies from './../RowsOfMovies/RowsOfMovies.tsx';
import requests from "./../../../API/Api";

const SeriesPage = () => {

    return(
        <>
            <RowsOfMovies fetchUrl={requests.fetchActionMovies} title={"Series"}/>
        </>
    )
}

export default SeriesPage;