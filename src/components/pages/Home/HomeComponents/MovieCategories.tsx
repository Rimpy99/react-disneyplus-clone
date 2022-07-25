import './MovieCategories.css';

import MovieCategoryCard from './MovieCategoryCard';

import MOVIE_CATEGORIES_DATA from '../../../../assets/images/home-images/movie-categories/MovieCategoriesData';

const MovieCategories = () => {

    return(
        <div className="categories-container">
            <div className="categories-wrapper">
                <MovieCategoryCard cardContent={MOVIE_CATEGORIES_DATA.disney}/>
                <MovieCategoryCard cardContent={MOVIE_CATEGORIES_DATA.pixar}/>
                <MovieCategoryCard cardContent={MOVIE_CATEGORIES_DATA.marvel}/>
            </div>
            <div className="categories-wrapper">
                <MovieCategoryCard cardContent={MOVIE_CATEGORIES_DATA.sw}/>
                <MovieCategoryCard cardContent={MOVIE_CATEGORIES_DATA.ng}/>
                <MovieCategoryCard cardContent={MOVIE_CATEGORIES_DATA.star}/>
            </div> 
        </div>
    )
}

export default MovieCategories;