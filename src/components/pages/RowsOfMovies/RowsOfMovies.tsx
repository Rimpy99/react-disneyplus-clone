import { useState, useEffect } from 'react';

import './RowsOfMovies.css';

import axios from './../../../API/Axios';

const baseUrl = "https://image.tmdb.org/t/p/original/"

interface Props{
    fetchUrl: string,
    title: string,
}

const RowsOfMovies:React.FC<Props> = ({fetchUrl, title}) => {

    const [ movies, setMovies ] = useState<any[]>([]);

    useEffect(()=>{
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
            
        try{
            fetchData();
        }catch(error){
            console.log(`An error occured: ${error}`);
        }
    },[fetchUrl])

    return(
        <div className="RowsOfMovies-container">
            <div className="RowsOfMovies-header">{title}</div>
            <div className="RowsOfMovies-content">
                {movies.map((movie,index)=>{
                    return( 
                        <div className="movie-block-container" key={`movie-block-${index}`}>
                            <div className="movie-block-content">
                                <img src={`${baseUrl}${movie.poster_path}`} className='movie-block-img'/>
                                <div className="movie-block-border"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RowsOfMovies;