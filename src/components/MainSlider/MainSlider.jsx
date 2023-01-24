import React from 'react';
import './MainSlider.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImg from '../../images/Slider/banner-img.png';
const MainSlider = () => {
    const settings = {
        arrows: false,
        centerMode: true,
        infinite: true,
        centerPadding: '180px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    centerPadding: '40px',
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '20px',
                }
            }
        ],
    };
    return (
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-12'>
                    <Slider {...settings}>
                        <img src={bannerImg} alt="Баннер" />
                        <img src={bannerImg} alt="Баннер" />
                        <img src={bannerImg} alt="Баннер" />
                        <img src={bannerImg} alt="Баннер" />
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default MainSlider;