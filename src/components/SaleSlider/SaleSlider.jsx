import React from 'react';
import './SaleSlider.css';
import Slider from 'react-slick';
import bekon from '../../images/SaleSlider/bekon.jpg';
import chease from '../../images/SaleSlider/chease.jpg';
import erik from '../../images/SaleSlider/erik.jpg';
import grib from '../../images/SaleSlider/grib.jpg';
import hrust from '../../images/SaleSlider/hrust.jpg';
import pite from '../../images/SaleSlider/pite.jpg';
import shaurmalay from '../../images/SaleSlider/shaurmalay.jpg';
import sitnik from '../../images/SaleSlider/sitnik.jpg';
const SaleSlider = () => {
    const settings = {
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
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
                    <Slider {...settings} className="sale-slider-container">
                        <img src={bekon} alt="Бекон" />
                        <img src={chease} alt="Сырная" />
                        <img src={erik} alt="Эрик" />
                        <img src={grib} alt="Грибной" />
                        <img src={hrust} alt="Хруст" />
                        <img src={pite} alt="Пита" />
                        <img src={shaurmalay} alt="Шайрмалай" />
                        <img src={sitnik} alt="Сытник" />
                    </Slider>
                </div>
            </div>
        </div>
    )
}








export default SaleSlider;