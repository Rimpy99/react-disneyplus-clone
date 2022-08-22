import RowsOfMovies from './../RowsOfMovies/RowsOfMovies.tsx';
import requests from "./../../../API/Api";
import "./../CommonStyles.css";

const SeriesPage = () => {

    return(
        <div className="page-container">
            <RowsOfMovies fetchUrl={requests.fetchActionMovies} title={"Series"}/>
        </div>
    )
}

export default SeriesPage;