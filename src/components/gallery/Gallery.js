import React from "react";
import './gallery.scss'
import 'swiper/swiper.min.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';

SwiperCore.use([Autoplay]);
const Gallery = ({images = []}) => {
    return (<Swiper
        slidesPerView={window.innerWidth > 1080 ? 3 : 1}
        autoplay={{delay: 2500}}
        loop={true}
        className={'wrapper'}>
        {images.map((image, index) => <SwiperSlide className={'slide'} key={index}><img className={'image'} src={image}
                                                                                        alt={image}/></SwiperSlide>)}
    </Swiper>)
}

export default Gallery