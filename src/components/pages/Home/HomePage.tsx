import './HomePage.css';
import EntranceSlider from './HomeComponents/EntranceSlider';
import MovieCategories from './HomeComponents/MovieCategories';

const HomePage = () => {

    return(
        <div className="homepage-container">
            <div className="entrance-slider-container">
                <EntranceSlider/>
            </div>
            <div>
                <MovieCategories/>
            </div>
        </div>
    )
}

export default HomePage;