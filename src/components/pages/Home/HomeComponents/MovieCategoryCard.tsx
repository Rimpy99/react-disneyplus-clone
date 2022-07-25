import React from 'react';
import './MovieCategoryCard.css';

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
        <div className="category">
            <img 
                src={require(`./../../../../assets/images/home-images/movie-categories/${cardContent.logo}`)} 
                className="category-logo"
            />
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
    )
}

export default MovieCategoryCard;