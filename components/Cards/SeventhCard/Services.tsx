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
  return (
    <div className="h-[800px] relative">
      <div className="flex justify-center">
        <div className="w-[80%] z-50">
          <h2 className="seventhFont text-[60px] text-black mt-10">Services</h2>
          <p className="seventhFont text-[30px] text-black mb-10">
            (Swipe to explore)
          </p>
        </div>
      </div>

      {/*  */}
      <div
        style={{
          clipPath: "url(#curve-PsUPn38Zh-1tmvdve)",
          background:
            "linear-gradient(315deg, rgb(0, 0, 0), rgb(213, 189, 175))",
        }}
        className="absolute right-52  top-0 -bottom-40 h-[300px] w-[300px]  md:h-[500px] md:w-[500px] z-0 "
      >
        <svg>
          <clipPath
            id="curve-PsUPn38Zh-1tmvdve"
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
          // navigation={windowSize.current[0] > 500 ? true : false}
          modules={[Autoplay, Pagination, Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-[500px] w-[90%] flex justify-center seventhFont2"
        >
          {user?.data?.services?.map((service: any, key: any) => {
            return (
              <SwiperSlide
                className="hover:scale-[1.02] transition-all ease-in-out duration-100"
                key={key}
              >
                <div className="flex justify-center">
                  <div
                    className={`w-[350px] flex justify-center bg-[#BFB0A0] h-[450px] py-2 rounded-xl`}
                  >
                    <div className="flex flex-col justify-start items-center">
                      <p className="seventhFont2 text-[30px] text-black mt-2">
                        {service.name}
                      </p>
                      <p className="h-[300px] z-50 mt-2 px-2 text-[13px] md:text-[15px]">
                        {service.description}
                      </p>
                      <button className="bg-[#333333] text-white px-6 py-5  rounded-md t-2">
                        Read more
                      </button>
                    </div>
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
