import React, { useRef, useState } from 'react';
import './EntranceSlider.css';

import ENTRANCE_SLIDER_DATA from '../../../../assets/images/home-images/entrance-slider/HomePageEntranceSliderData';

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
            delay: .2,
            duration: .5,
            type: "ease-in",
        }
    }
}

const EntranceSlider: React.FC = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const sliderRef = useRef<Slider | null>(null);

    let sliderSettings={
        dots: true,
        customPaging: function (i: number) {
          return <div className="dot">{i}</div>;
        },
        dotsClass: "slick-dots slick-thumb",
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        centerMode: true,
        speed:400,
        slidesToShow:1,
        slidesToScroll:1,
        variableWidth: true,
        adaptiveHeight: true,
        beforeChange: (current: number, next: number) => {
          setSlideIndex(next);
        }
    }

    return(
        <div className="entrance-slider">
            <Slider ref={sliderRef} {...sliderSettings}>
                {
                    ENTRANCE_SLIDER_DATA.map(({background, title}, index) => {
                        return (
                            // style={{width: "90vw"}}
                            <div className="entrance-slide" key={`slide-${index}`} >
                                <img 
                                    src={require(`./../../../../assets/images/home-images/entrance-slider/${background}`)} 
                                    alt="film's wallpaper" 
                                    className={`entrance-slide-image ${index !== slideIndex && 'entrance-slide-image-not-active'}`}
                                />
                                {index === slideIndex && 
                                    <motion.img
                                        src={require(`./../../../../assets/images/home-images/entrance-slider/${title}`)} 
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
            <button 
                onClick={() => 
                    {
                        if(sliderRef.current !== null){
                            sliderRef.current.slickPrev()
                        }
                    }
                } 
                className="slider-btn slider-btn-prev">
                <div className="slider-btn-prev-content"><IoIosArrowBack className="slider-arrow"/></div>
            </button>
            <button 
                onClick={() => 
                    {
                        if(sliderRef.current !== null){
                            sliderRef.current.slickNext()
                        }
                    }
                } 
                className="slider-btn slider-btn-next">
                <div className="slider-btn-next-content"><IoIosArrowForward className="slider-arrow"/></div>
            </button>
        </div>
    )
}

export default EntranceSlider;