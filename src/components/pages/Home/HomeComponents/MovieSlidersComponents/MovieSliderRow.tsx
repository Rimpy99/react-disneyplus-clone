import { useState, useEffect } from 'react';

import axios from './../../../../../API/Axios'

interface Props{
    title: string,
    fetchUrl: string,
}

const baseUrl = "https://image.tmdb.org/t/p/original/"

const MovieSliderRow: React.FC<Props> = ({title, fetchUrl}) => {

    const [ movies, setMovies ] = useState<any[]>([])

    useEffect(()=>{
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }

        try{
            fetchData();
        }catch(error){
            console.log(`An error occured: ${error}`)
        }
    }, [fetchUrl]);

    return(
        <div>
            {movies.map((movie)=>{
                return (
                    <div>
                        <img src={`${baseUrl}${movie.poster_path}`}/>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieSliderRow;