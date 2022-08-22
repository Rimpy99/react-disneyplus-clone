import RowsOfMovies from './../RowsOfMovies/RowsOfMovies.tsx';
import requests from "./../../../API/Api";
import "./../CommonStyles.css";

const MoviesPage = () => {

    return(
        <div className="page-container">
            <RowsOfMovies fetchUrl={requests.fetchComedyMovies} title={"Movies"}/>
        </div>
    )
}

export default MoviesPage;