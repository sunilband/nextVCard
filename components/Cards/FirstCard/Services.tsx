"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useUserContext } from "@/context/userContexts";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

type Props = {};

const Services = (props: Props) => {
  const { user } = useUserContext();
  const windowSize: any = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize.current);
  return (
    <div className="bg-[#242424]">
      <h2 className="text-center w-[100vw]  pt-4 text-3xl tracking-wide font-medium text-[#F9D254]">
        Services
      </h2>
      <p className="text-center w-[100vw] text-lg tracking-wide font-medium text-[#F9D254]">
        (Swipe to explore)
      </p>

      <div className="pt-6">
        <Swiper
          spaceBetween={90}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={
            windowSize.current[0] > 1055
              ? 3
              : windowSize.current[0] > 800
              ? 2
              : 1
          }
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={windowSize.current[0] > 500 ? true : false}
          modules={[Autoplay, Pagination, Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-[500px]"
        >
          {user?.data?.services?.map((service: any, key: any) => {
            return (
              <SwiperSlide
                className="hover:scale-[1.02] transition-all ease-in-out duration-100"
                key={key}
              >
                <div className="w-[100%] flex justify-center">
                  <div className="w-[300px] h-[400px] rounded-md my-2 bg-slate-100 text-[#242424] border-[4px] border-[#F9D254]">
                    <h2 className="text-center font-semibold tracking-wide bg-[#F9D254] h-7">
                      {service?.name ? service.name : ""}
                    </h2>
                    <p className="text-left mt-4 font-light h-[80%] overflow-hidden px-3">
                      {service?.description ? service.description : ""}
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
