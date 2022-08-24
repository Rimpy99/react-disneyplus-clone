import "./Details.css";
import { useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

import { HiPlusSm } from "react-icons/hi";
import { BsPlayFill } from "react-icons/bs";

import axios from './../../../API/Axios';
import requests from "./../../../API/Api";

const Details = () => {
    const { id } = useParams();

    const [ movieData, setMovieData ] = useState({
        title: '',
        description: '',
    })

    useEffect(()=>{
        const fetchData = async () => {
            const request = await axios.get(`/movie/${id}` + requests.findMovie)

            setMovieData({
                title: request.data.original_title,
                description: request.data.overview,
            })
        }

        try{
            fetchData();
        }catch(error){
            console.log(`An error occured: ${error}`);
        }
    },[id])

    return(
        <div className="details-container">
            <div className="details-background">
                <img 
                    src={require("./../../../assets/images/home-images/details/ba-bg.jpg")} 
                    className="details-img details-img-fade-bottom details-img-fade-left"
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
                        <div className="details-content-btn-add">
                            <HiPlusSm size="30" className="details-content-btn-add-plus"/>
                        </div>
                    </div>
                </div>
                <div className="details-content-desc">{movieData.description}</div>
            </div>
        </div>
    )  
}

export default Details;