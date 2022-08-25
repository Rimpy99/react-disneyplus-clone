import "./Details.css";
import { useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

//Imports connected to REDUX
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../../features/WatchListData';
import { del } from '../../../features/WatchListData';
import { selectWatchListMovies } from '../../../features/WatchListData';

//Imports connected to REACT-ICONS
import { HiPlusSm } from "react-icons/hi";
import { BsPlayFill, BsX } from "react-icons/bs"; 

//Imports connected to API
import axios from '../../../API/Axios';
import requests from "../../../API/Api";

//Imports connected to FRAMER-MOTION
import { motion, AnimatePresence } from "framer-motion";


const buttonVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: .2,
        }
    }
}

const Details = () => {
    const dispatch = useDispatch();
    const watchListMovies = useSelector(selectWatchListMovies)

    const { id } = useParams();

    const [ movieData, setMovieData ] = useState({
        title: '',
        description: '',
        poster: '',
        id: '', 
    })

    useEffect(()=>{
        const fetchData = async () => {
            const request = await axios.get(`/movie/${id}` + requests.findMovie);
            console.log(request.data)

            setMovieData({
                title: request.data.original_title,
                description: request.data.overview,
                poster: request.data.poster_path,
                id: request.data.id,
            })
        }

        try{
            fetchData();
        }catch(error){
            console.log(`An error occured: ${error}`);
        }
    },[id]);

    const changeWatchListSliceState = () => {
        if(watchListMovies.filter(e => e.id === movieData.id).length > 0){
            dispatch(del(movieData.id));
        }else{ 
            dispatch(add({title: movieData.title, poster: movieData.poster, id: movieData.id}));
        }
    }

    return(
        <div className="details-container">
            <div className="details-background">
                <img 
                    src={require("./../../../assets/images/home-images/details/ba-bg.jpg")} 
                    className="details-img details-img-fade-bottom details-img-fade-left"
                    alt="background"
                />
                <div className="details-content-inner-shadow shadow-left"/>
                <div className="details-content-inner-shadow shadow-bottom"/>
            </div>
            <div className="details-content">
                <h1 className="details-content-title">{movieData.title}</h1>
                <div className="details-content-btns">
                    <button className="details-content-btn-watch">
                        <BsPlayFill   size="30"/>
                        <span className="details-content-btn-watch-text">PLAY</span>
                    </button>
                    <div className="details-contetn-btn-add-container">
                        <div 
                            className="details-content-btn-add"
                            onClick={() => changeWatchListSliceState()}
                        >
                            <AnimatePresence>
                                {watchListMovies.filter(e => e.id === movieData.id).length > 0
                                    ?   <motion.div 
                                            variants={buttonVariants} 
                                            initial="hidden" 
                                            animate="visible" 
                                            exit={{rotate: 90, opacity: 0, transition: {duration: .2}}} 
                                            key="add-btn" 
                                            className="details-content-btn"
                                        >
                                            <BsX size="30" className="details-content-btn-add-plus"/>
                                        </motion.div>
                                    :   <motion.div 
                                            variants={buttonVariants} 
                                            initial="hidden" 
                                            animate="visible" 
                                            exit={{rotate: 90, opacity: 0, transition: {duration: .2}}} 
                                            key="del-btn" 
                                            className="details-content-btn"
                                        >
                                            <HiPlusSm size="30" className="details-content-btn-add-plus"/>
                                        </motion.div> 
                                }
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
                <div className="details-content-desc">{movieData.description}</div>
            </div>
        </div>
    )  
}

export default Details;