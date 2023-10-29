
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SwiperHero = ({ id, title, description, link, btnTitle ,handleButtonClick}) => {
  

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
     
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <div class="py-12 md:py-16 lg:py-20 mx-auto w-full max-w-7xl px-5 md:px-10 test">
        <div class="relative flex-col flex min-h-screen items-center justify-center">
          <div class="min-w-full">
            <div class="py-12 md:py-16 lg:py-20 mx-auto w-full max-w-3xl">
              <div class="flex-col flex items-center gap-y-10">
                <div class="flex-col flex items-center gap-y-5">
                  <h1 class="text-center font-bold text-4xl md:text-4xl text-white">
                    {title}
                  </h1>
                  <div class="max-w-[510px]">
                    <p class="flex-col text-center text-[#808080] max-[479px]:text-sm">
                      {description}
                    </p>
                  </div>
                </div>
                <div class="justify-center flex flex-row items-center gap-4 flex-wrap">
                  <button
                    onClick={handleButtonClick}
                    class="inline-block items-center bg-red-800 rounded-md px-6 py-3 text-center font-semibold text-white"
                  >
                    {btnTitle}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SwiperSlide >
        <img
          src="assets/images/slide2.jpg"
          style={{ objectFit: "contain", opacity: '30%' }}
        />
      </SwiperSlide>
      <SwiperSlide >
        <img
          src="assets/images/slide1.jpg"
          style={{ objectFit: "contain", opacity: '30%' }}
        />
      </SwiperSlide>
      <SwiperSlide >
        <img
          src="assets/images/slide3.jpg"
          style={{ objectFit: "contain", opacity: '30%' }}
        />
      </SwiperSlide>
      
    </Swiper>
  );
};

export default SwiperHero;
