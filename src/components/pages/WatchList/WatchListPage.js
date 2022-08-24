import { useSelector } from  'react-redux';
import { selectWatchListMovies } from './../../../features/WatchListData';

const WatchListPage = () => {
    const watchListMovies = useSelector(selectWatchListMovies)

    return(
        <>
            {watchListMovies.map((movie)=>{
                return <p style={{color: "white", padding: 100}}>{movie.title}</p>
            })}
        </>
    )
}

export default WatchListPage;