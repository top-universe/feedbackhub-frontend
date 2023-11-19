import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import DesignedSwiperImages from "./DesignedSwiperImages.jsx";

const DesignedSwiper = (props) => {
  return (
    <div className="w-full sm:flex-shrink-0">
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full"
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 7,
          },
        }}
      >
        {props.images.map((image, index) => (
          <SwiperSlide key={index} className="mr-4">
            <div className="swiper-slide p-2 fade-svg">
              <DesignedSwiperImages img={image.imgURL} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DesignedSwiper;
