import { useState, useEffect } from 'react';

import './MovieSliderRow.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

    const sliderSettings = {
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        // centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: false,
    }

    return(
        <div className="movie-slider-row">
            <h2 className="movie-slider-title">{title}</h2>
            <div className='movie-slider-container'>
                <Slider {...sliderSettings}>
                    {movies.map((movie, index)=>{
                        return (
                            <div className={`movie-slide-container ${index === 0 && 'movie-slide-first'}`} key={index}>
                                <div className="movie-slide">
                                    <div className="movie-slide-content">
                                        <img 
                                            src={`${baseUrl}${movie.poster_path}`} 
                                            className="movie-slide-img"
                                            alt={title}
                                        />
                                        <div className="movie-slide-border"/>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default MovieSliderRow;