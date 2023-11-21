"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useUserContext } from "@/context/userContexts";

type Props = {};

const Services = (props: Props) => {
  const { user } = useUserContext();
  const windowSize: any = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize.current);
  return (
    <div className="thirdFont font-bold text-[#FBFEF9]">
      <div className="flex justify-center">
        <div className="w-[80%]">
          <h2 className=" text-[42px] uppercase text-center sm:text-left text-[#0E79B2]">
            Services
          </h2>
          <p className="text-[25px] text-center sm:text-left">
            (Swipe to explore)
          </p>
        </div>
      </div>

      <div className="pt-6">
        <Swiper
          spaceBetween={90}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={
            windowSize.current[0] > 1250
              ? 3
              : windowSize.current[0] > 850
              ? 2
              : 1
          }
          loop={true}
          pagination={{
            clickable: true,
          }}
          // navigation={windowSize.current[0] > 500 ? true : false}
          modules={[Autoplay, Pagination, Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-[500px] w-[80%]"
        >
          {user?.data?.services?.map((service: any, key: any) => {
            return (
              <SwiperSlide
                className="hover:scale-[1.02] transition-all ease-in-out duration-100 thirdFont2"
                key={key}
              >
                <div className="w-[100%] flex justify-center">
                  <div className="w-[300px] h-[400px] rounded-md my-2 bg-slate-100 text-[#242424] border-[4px] border-[#F39237]">
                    <h2 className="text-center font-semibold tracking-wide bg-[#F39237] h-7">
                      {service.name}
                    </h2>
                    <p className="text-left mt-4 font-light h-[80%] overflow-hidden px-3">
                      {service.description}
                    </p>
                    {/* <div className="flex w-[100%] justify-center">
                    <button className="w-[200px] bg-[#242424] text-white rounded-md border hover:scale-105 transition-all ease-in-out duration-100">
                      Read more
                    </button>
                  </div> */}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
