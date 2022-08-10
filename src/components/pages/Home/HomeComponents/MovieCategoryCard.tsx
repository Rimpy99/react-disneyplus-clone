import React from 'react';
import './MovieCategoryCard.css';

import { Link } from "react-router-dom";

interface Props{
    cardContent: PropsObjectTemplate,
}

interface PropsObjectTemplate{
    logo: string,
    background: string,
}

const MovieCategoryCard: React.FC<Props> = ({cardContent}) => {

    const videoPlay = (event: React.MouseEvent<HTMLVideoElement>) =>{
        event.currentTarget.play();
    }

    const videoPause = (event: React.MouseEvent<HTMLVideoElement>) =>{
        event.currentTarget.pause();
    }

    return(
        <Link to="/details">
            <div className="category">
                <img 
                    src={require(`./../../../../assets/images/home-images/movie-categories/${cardContent.logo}`)} 
                    className="category-logo"
                />
                <div className="category-border"></div>
                <video 
                    src={require(`./../../../../assets/images/home-images/movie-categories/${cardContent.background}`)} 
                    className="category-bg"
                    loop
                    muted
                    // preload='none'
                    onMouseOver={videoPlay}
                    onMouseOut={videoPause}
                />
            </div>
        </Link>
    )
}

export default MovieCategoryCard;