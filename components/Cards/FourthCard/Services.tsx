"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useUserContext } from "@/context/userContexts";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

type Props = {};

const Services = (props: Props) => {
  const { user } = useUserContext();
  const windowSize: any = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize.current);
  return (
    <div className="relative">
      <h2 className="text-center w-[100vw]  pt-4 text-3xl tracking-wide font-medium fourthFont text-[50px] mt-10">
        Services
      </h2>
      <p className="text-center w-[100vw] text-lg tracking-wide font-medium fourthFont text-[20px] mt-4">
        (Swipe to explore)
      </p>

      {/*  */}
      <div
        style={{
          clipPath: "url(#curve-vus8ANjfA-1tmvdve)",
          background:
            "linear-gradient(135deg, rgb(25, 118, 210), rgb(13, 71, 161))",
        }}
        className="w-80 h-80 opacity-75 z-0 absolute right-[70%] -top-64 skew-x-12 rotate-3 invisible sm:visible"
      >
        <svg>
          <clipPath
            id="curve-vus8ANjfA-1tmvdve"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.005)"
          >
            <path d="M89.9318 6.12863C94.1569 -2.04288 105.843 -2.04288 110.068 6.12863L136.973 58.1644C138.051 60.2496 139.75 61.9486 141.836 63.0268L193.871 89.9318C202.043 94.1569 202.043 105.843 193.871 110.068L141.836 136.973C139.75 138.051 138.051 139.75 136.973 141.836L110.068 193.871C105.843 202.043 94.1569 202.043 89.9318 193.871L63.0268 141.836C61.9486 139.75 60.2496 138.051 58.1644 136.973L6.12863 110.068C-2.04288 105.843 -2.04288 94.1569 6.12863 89.9318L58.1644 63.0268C60.2496 61.9486 61.9486 60.2496 63.0268 58.1644L89.9318 6.12863Z"></path>
          </clipPath>
        </svg>
      </div>
      {/*  */}
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
          className="h-[500px] fourthFont2"
        >
          {user?.data?.services?.map((service: any, key: any) => {
            return (
              <SwiperSlide
                className="hover:scale-[1.02] transition-all ease-in-out duration-100"
                key={key}
              >
                <div className="w-[100%] flex justify-center">
                  <div className="w-[300px] h-[400px] rounded-md my-2 bg-[#cbe7fb] text-[#242424] border-[4px] border-[#cbe7fb]">
                    <h2 className="text-center font-semibold tracking-wide bg-[#64B5F6] rounded-md h-7">
                      {service?.name}
                    </h2>
                    <p className="text-left mt-4 font-light h-[80%] overflow-hidden px-3">
                      {service?.description}
                    </p>
                    {/* <div className="flex w-[100%] justify-center">
                    <button className="w-[200px] bg-[#64B5F6] text-white rounded-md border hover:scale-105 transition-all ease-in-out duration-100">
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
