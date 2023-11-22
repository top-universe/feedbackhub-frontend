import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import image1 from "../assets/svg/imagep1.png";
import image2 from "../assets/svg/imagep2.png";
import image3 from "../assets/svg/imagep3.png";
import image4 from "../assets/svg/imagep4.png";
import image5 from "../assets/svg/imagep5.png";
import image6 from "../assets/svg/imagep6.png";
import image7 from "../assets/svg/imagep7.png";
import image8 from "../assets/svg/imagep8.png";
import image9 from "../assets/svg/imagep9.png";


const images = [image1, image2, image3,image4,image5,image6,image7,image8,image9];  

const DesignedSwiper = () => {
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
       {images.map((image, index) => (
         <SwiperSlide key={index} className="mr-4">
           <div className="swiper-slide p-2 fade-svg">
             <img className="w-15 h-15" src={image} alt={`avatar-${index}`} />
           </div>
         </SwiperSlide>
       ))}
     </Swiper>
   </div>
 );
};

export default DesignedSwiper;
