import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Parallax, Pagination,  } from 'swiper/modules';
const CustomSwiperSlider = () => {
  return (
    <>
     <Swiper
        style={{
          '--swiper-pagination-color': '#fff',
        }}
      
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url("/images/top-up.png")',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          Humanitarian Assistance – Development Aid Africa
          </div>
     
        </SwiperSlide>
       
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          Humanitarian Assistance – Development Aid Africa
          </div>
     
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          Humanitarian Assistance – Development Aid Africa
          </div>
     
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          Humanitarian Assistance – Development Aid Africa
          </div>
     
        </SwiperSlide>
      </Swiper>
      
    </>
  )
}

export default CustomSwiperSlider
