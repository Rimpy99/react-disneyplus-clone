import { useState, useEffect } from 'react';

import "./SearchPage.css";

import axios from './../../../API/Axios';
import requests from "./../../../API/Api";

const baseUrl = "https://image.tmdb.org/t/p/original/";
const fetchUrl = requests.fetchComedyMovies;

const SearchPage = () => {
    const [ moviesFromApi, setMoviesFromApi ] = useState<any[]>([]);
    const [ searchInput, setSearchInput ] = useState<string>('');
    const [ movies, setMovies ] = useState<any[]>([]);

    useEffect(()=>{
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            setMoviesFromApi(request.data.results);
        }

        try{
            fetchData();
        }catch(error){
            console.log(`An error occured: ${error}`);
        }
    }, [fetchUrl]);


    useEffect(()=>{
        if(searchInput === ''){
            setMovies(moviesFromApi);
        }else{
            setMovies(
                moviesFromApi.filter((elem)=>{
                    return elem.title.toLowerCase().includes(searchInput.toLowerCase());
                })
            );
        }
    },[moviesFromApi, searchInput]);

    return(
        <div className="search-container">
            <input 
                type="text" 
                className="search-engine" 
                placeholder="Search by title, character, or genre"
                onChange={(e)=>setSearchInput(e.target.value)}
            />
            <div className="search-content">
                <div className="search-content-movies">
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
        </div>
    )
}

export default SearchPage;