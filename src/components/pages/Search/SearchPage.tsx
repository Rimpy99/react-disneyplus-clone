import { useState, useEffect } from 'react';

import axios from './../../../API/Axios';
import requests from "./../../../API/Api";

const baseUrl = "https://image.tmdb.org/t/p/original/";
const fetchUrl = requests.fetchComedyMovies;

const SearchPage = () => {
    const [ movies, setMovies ] = useState(0);

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
    }, [fetchUrl]);

    return(
        <h1>SearchPage</h1>
    )
}

export default SearchPage;