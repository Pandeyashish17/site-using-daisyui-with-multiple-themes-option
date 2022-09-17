import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

const TestiSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
                <div className="w-48 h-48 lg:w-[328px] lg:h-[328px]">
                  <img
                    className="rounded-2xl"
                    src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/05/gojo-satoru-featured.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <h5 className="font-body text-2xl mb-8 italic font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Obcaecati voluptatibus et amet quos dolores dolor.{" "}
                  </h5>
                  <div>
                    <p className="text-lg ">Ashish Pandey</p>
                    <p>Ceo Of Ashish Industry</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestiSlider;
