import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/effect-fade';

import image1 from '../../assets/imagep1.png';
import image2 from '../../assets/imagep2.png';
import image3 from '../../assets/imagep3.png';
import image4 from '../../assets/imagep4.png';
import image5 from '../../assets/imagep5.png';
import image6 from '../../assets/imagep6.png';
import image7 from '../../assets/imagep7.png';
import image8 from '../../assets/imagep8.png';
import image9 from '../../assets/imagep9.png';

const Section7 = () => {
  return (
            
              <div className="bg-blue-500  rounded-bl-[40px] rounded-br-[40px] mx-auto">
          <div className=" p-4 mx-auto lg:w-1440 lg:h-633.912 lg:flex-shrink-0 ">
            <div className="text-center  pt-0 px-0">
              <h1 className="text-bluegray-2 text-center lg:text-fh-4xl p-4 text-fh-2xl-semi">
                Designed to fit your workflow
              </h1>
              <p className="text-bluegray-2 text-center lg:text-fh-lg text-fh-sm mb-8 ">
            Feedback Hub connects to the tools you already use.<br/> Seamless Integration with CRM Systems and Tools
            </p>
            </div>

            <div className="w-full  sm:flex-shrink-0">
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
                <SwiperSlide className="mr-4">
                  <div className="swiper-slide p-2 fade-svg">
                    <img src={image1} alt="Image 1" className="w-15 h-15" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="mr-4">
                  <div className="swiper-slide p-2 fade-svg">
                    <img src={image2} alt="Image 2" className="w-15 h-15" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="mr-4">
                  <div className="swiper-slide p-2 fade-svg">
                    <img src={image3} alt="Image 3" className="w-15 h-15" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="mr-4">
                  <div className="swiper-slide p-2 fade-svg">
                    <img src={image4} alt="Image 4" className="w-15 h-15" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="mr-4">
                  <div className="swiper-slide p-2 fade-svg">
                    <img src={image5} alt="Image 5" className="w-15 h-15" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="mr-4">
                  <div className="swiper-slide p-2 fade-svg">
                    <img src={image6} alt="Image 6" className="w-15 h-15" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="mr-4">
                  <div className="swiper-slide p-2 fade-svg">
                    <img src={image7} alt="Image 7" className="w-15 h-15" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide p-2 fade-svg">
                    <img src={image8} alt="Image 8" className="w-15 h-15" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="mr-4">
                  <div className="swiper-slide p-2 fade-svg">
                    <img src={image9} alt="Image 9" className="w-15 h-15" />
                  </div>
                </SwiperSlide>

                <div className="swiper-fade-effect-left"></div>
                <div className="swiper-fade-effect-right"></div>
              </Swiper>
            </div>
            <button className="mx-auto px-6 py-3 mb-20 mt-8 w-428 h-1762.445 text-bluegray-1 flex-shrink-0 rounded-lg border-2 border-white text-fh-base flex items-center">
            See all integrations
            </button>
            </div>
            </div>
            


         
  );
};

export default Section7;
