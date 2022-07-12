import './HomePage.css';
import ENTRANCE_SLIDER_DATA from '../../../assets/images/home-images/HomePageEntranceSliderData';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HomePage = () => {

    return(
        <>
            <Swiper
                centeredSlides={true}
                loop={true}
                breakpoints={{
                    320: {
                        spaceBetween: -50,
                    },
                    600: {
                        spaceBetween: -80, 
                    },
                    920: {
                        spaceBetween: -120, 
                    },
                    1400: {
                        spaceBetween: -160,
                    },
                    1700: {
                        spaceBetween: -200,
                    }
                }}
            >
                {
                    ENTRANCE_SLIDER_DATA.map(sliderData => {
                        return (
                            <SwiperSlide className="entrance-slide">
                                <img 
                                    src={require(`./../../../assets/images/home-images/${sliderData.background}`)} 
                                    alt="film's wallpaper" 
                                    className="entrance-slide-image"
                                />
                                <img 
                                    src={require(`./../../../assets/images/home-images/${sliderData.title}`)} 
                                    alt="film's title" 
                                    className="entrance-slide-title"
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default HomePage;