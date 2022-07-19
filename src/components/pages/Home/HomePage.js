import { useRef, useState } from 'react';
import './HomePage.css';
import ENTRANCE_SLIDER_DATA from '../../../assets/images/home-images/HomePageEntranceSliderData';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { motion } from "framer-motion";

const HomePage = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const slider = useRef(null);

    let sliderSettings={
        dots: true,
        customPaging: function (i) {
          return <div className="dot"></div>;
        },
        dotsClass: "slick-dots slick-thumb",
        autoplay: true,
        infinite: true,
        centerMode: true,
        speed:500,
        autoplaySpeed: 4000,
        slidesToShow:1,
        slidesToScroll:1,
        beforeChange: (current, next) => {
          console.log(current);
          setSlideIndex(next);
        }
    }

    return(
        <div className="entrance-slider">
            <Slider ref={slider} {...sliderSettings}>
                {
                    ENTRANCE_SLIDER_DATA.map(({background, title}, index) => {
                        return (
                            <div className="entrance-slide" key={`slide-${index}`}>
                                <img 
                                    src={require(`./../../../assets/images/home-images/${background}`)} 
                                    alt="film's wallpaper" 
                                    className="entrance-slide-image"
                                />
                                {/* {index === slideIndex &&  */}
                                    <motion.img
                                        src={require(`./../../../assets/images/home-images/${title}`)} 
                                        alt="film's title"
                                        className="entrance-slide-title"
                                        // variants={activeSlideVariants} 
                                        // initial="hidden" 
                                        // animate="visible"
                                    />
                                {/* } */}
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default HomePage;