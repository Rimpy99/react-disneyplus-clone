import { useRef, useState } from 'react';
import './HomePage.css';
import ENTRANCE_SLIDER_DATA from '../../../assets/images/home-images/HomePageEntranceSliderData';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { motion } from "framer-motion";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const activeSlideVariants = {
    hidden: {
        opacity: 0,
        x: 10,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .4,
            duration: .5,
            type: "ease-in",
        }
    }
}

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
        speed:400,
        autoplaySpeed: 4000,
        slidesToShow:1,
        slidesToScroll:1,
        variableWidth: true,
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
                            <div className="entrance-slide" key={`slide-${index}`} style={{width: "90vw"}}>
                                <img 
                                    src={require(`./../../../assets/images/home-images/${background}`)} 
                                    alt="film's wallpaper" 
                                    className={`entrance-slide-image ${index !== slideIndex && 'entrance-slide-image-not-active'}`}
                                />
                                {index === slideIndex && 
                                    <motion.img
                                        src={require(`./../../../assets/images/home-images/${title}`)} 
                                        alt="film's title"
                                        className="entrance-slide-title"
                                        variants={activeSlideVariants} 
                                        initial="hidden" 
                                        animate="visible"
                                    />
                                }
                            </div>
                        )
                    })
                }
            </Slider>
            <button onClick={() => slider.current.slickPrev()} className="slider-btn slider-btn-prev">
                <div className="slider-btn-prev-content"><IoIosArrowBack color={"white"} size={40}/></div>
            </button>
            <button onClick={() => slider.current.slickNext()} className="slider-btn slider-btn-next">
                <div className="slider-btn-next-content"><IoIosArrowForward color={"white"} size={40}/></div>
            </button>
        </div>
    )
}

export default HomePage;