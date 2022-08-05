import { useState, useEffect } from 'react';

import './RowsOfMovies.css';

import axios from './../../../API/Axios';

const baseUrl = "https://image.tmdb.org/t/p/original/"

interface Props{
    fetchUrl: string,
}

const RowsOfMovies:React.FC<Props> = ({fetchUrl}) => {

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
        <div className='RowsOfMovies-container'>
            {movies.map((movie,index)=>{
                return( 
                    <div className="movie-block" key={`movie-block-${index}`}>
                        <img src={`${baseUrl}${movie.poster_path}`}/>
                    </div>
                )
            })}
        </div>
    )
}

export default RowsOfMovies;