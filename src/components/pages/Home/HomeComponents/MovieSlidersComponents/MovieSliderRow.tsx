import { useState, useEffect, useRef } from 'react';

import './MovieSliderRow.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import axios from './../../../../../API/Axios'

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


interface Props{
    title: string,
    fetchUrl: string,
}

const baseUrl = "https://image.tmdb.org/t/p/original/"

const MovieSliderRow: React.FC<Props> = ({title, fetchUrl}) => {

    const [ movies, setMovies ] = useState<any[]>([]);
    const [ slideIndex, setSlideIndex ] = useState<number>(0)

    const movieSliderRef = useRef<Slider | null>(null);

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

    useEffect(()=>{
        console.log(slideIndex)
    },[slideIndex])

    const sliderSettings = {
        arrows: false,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: false,
        beforeChange: (current: number, next: number) => {
            setSlideIndex(next);
        }
    }

    return(
        <div className="movie-slider-row">
            <h2 className="movie-slider-title">{title}</h2>
            <div className='movie-slider-container'>
                <Slider ref={movieSliderRef} {...sliderSettings}>
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
                <button 
                    onClick={() => 
                        {
                            if(movieSliderRef.current !== null){
                                movieSliderRef.current.slickPrev()
                            }
                        }
                    } 
                    className={`movie-slider-btn movie-slider-btn-prev ${(slideIndex === 0) && 'movie-slider-btn-not-active'}`}>
                    <div className="movie-slider-btn-prev-content"><IoIosArrowBack className="movie-slider-arrow"/></div>
                </button>
                <button 
                    onClick={() => 
                        {
                            if(movieSliderRef.current !== null){
                                movieSliderRef.current.slickNext()
                            }
                        }
                    } 
                    className={`movie-slider-btn movie-slider-btn-next ${(slideIndex === 16) && 'movie-slider-btn-not-active'}`}>
                    <div className="movie-slider-btn-next-content"><IoIosArrowForward className="movie-slider-arrow"/></div>
                </button>
            </div>
        </div>
    )
}

export default MovieSliderRow;