import { useSelector } from  'react-redux';
import { Link } from 'react-router-dom';
import { selectWatchListMovies } from './../../../features/WatchListData';

import './WatchListPage.css';

const baseUrl = "https://image.tmdb.org/t/p/original/"

const WatchListPage = () => {
    const watchListMovies = useSelector(selectWatchListMovies)

    return(
        <div className="RowsOfMovies-container" style={{paddingTop: 70}}>
            <div className="RowsOfMovies-header">My List</div>
            <div className="WatchList-headline">My movies and series</div>
            <div className="RowsOfMovies-content">
                {watchListMovies.map((movie)=>{
                    return (
                        <Link to={`/details/` + movie.id}>
                            <div className="movie-block-container" key={`movie-block-${movie.id}`}>
                                <div className="movie-block-content">
                                    <img src={`${baseUrl}${movie.poster}`} className='movie-block-img' alt=''/>
                                    <div className="movie-block-border"/>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default WatchListPage;