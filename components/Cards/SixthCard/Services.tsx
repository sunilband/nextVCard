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
  return (
    <div className="h-[800px] relative">
      <div className="flex justify-center">
        <div className="w-[80%] z-50">
          <h2 className="sixthFont text-[60px] text-black mt-10">Services</h2>
          <p className="sixthFont text-[30px] text-black mb-10">
            (Swipe to explore)
          </p>
        </div>
      </div>

      {/*  */}
      <div
        className="absolute right-2 -bottom-40 sm:h-[400px] md:h-[800px] z-0 "
        data-framer-background-image-wrapper="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 692.68 534.44"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            id="uuid-afa4718a-41ef-46ad-9f1b-fdedc1410b9c-71"
            d="m215.22,295.99c2.93-3.93,4.87-8.5,5.67-13.33l32.6-39.48-19.24-14.96-31,41.66c-4.34,2.26-8.08,5.53-10.9,9.54-7.19,9.92-7.91,21.68-1.59,26.25,6.31,4.58,17.26.24,24.45-9.68h.01Z"
            fill="#ffb6b6"
          />
          <polygon
            points="347.26 139.3 306.48 112.05 223.72 237.97 245.27 261.1 347.26 139.3"
            fill="#6c63ff"
          />
          <path
            d="m0,292.56c0,.87.7,1.57,1.57,1.57h689.54c.87,0,1.57-.7,1.57-1.57s-.7-1.57-1.57-1.57H1.57c-.87,0-1.57.7-1.57,1.57Z"
            fill="#3f3d56"
          />
          <polygon
            points="277.66 104.05 273.11 72.7 313.29 62.48 318.63 90.22 277.66 104.05"
            fill="#ffb6b6"
          />
          <polygon
            points="156.47 439.91 161.24 484.41 194.08 474.34 188.78 438.85 156.47 439.91"
            fill="#ffb6b6"
          />
          <path
            d="m272.48,246.55s-107.54,20.66-120.25,51.92,2.12,148.33,2.12,148.33l36.55,3.71,15.36-134.56s93.24-1.59,100.12-12.71,5.83-51.39,5.83-51.39l-39.73-5.3h0Z"
            fill="#2f2e41"
          />
          <path
            d="m156.9,462.52h0l-21.3,21.16s-36.35,29.86-13.04,28.27c23.31-1.59,83.7-15.89,83.17-27.02s-10.07-33.37-10.07-33.37l-38.77,10.95h.01Z"
            fill="#2f2e41"
          />
          <polygon
            points="280.97 452.73 304.99 490.49 329.96 466.9 309.46 437.44 280.97 452.73"
            fill="#ffb6b6"
          />
          <path
            d="m299.13,227.97s-87.2,66.24-84.73,99.89c2.48,33.65,67.72,131.98,67.72,131.98l34.4-12.9-45.94-127.4s82.85-42.8,84.08-55.82-17.58-48.63-17.58-48.63l-37.96,12.88h.01Z"
            fill="#2f2e41"
          />
          <path
            d="m292.1,470.29h0l-12.13,32.27s-17.59,41.55,2.59,29.78,67.95-51.38,62.54-61.12-23.83-25.44-23.83-25.44l-29.17,24.51h0Z"
            fill="#2f2e41"
          />
          <circle cx="291.74" cy="49.82" r="32.7" fill="#ffb6b6" />
          <path
            d="m315.92,74.92l-40.79,30.2-6.36,131.38-15.36,14.83,52.97,51.92s58.27-18.01,52.44-45.56l-5.83-27.55,2.1-30.74c3.08-44.95-10.92-89.4-39.19-124.47h.02s0,0,0,0Z"
            fill="#6c63ff"
          />
          <path
            d="m315.26,75.6l-19.9-.66s5.16-31.18-7.14-31.01l-11.12-5.29s-27.81-18.74-15.06-26.6c12.76-7.85,21.66-14.91,28.95-10.86,7.3,4.05,22.08,5.63,22.08,5.63,0,0,26.22,11.04,25.44,20.27s-6.74,49.66-23.26,48.51h.01Z"
            fill="#2f2e41"
          />
          <path
            id="uuid-b608ab84-b9cd-47a8-808f-666f8f7d666f-72"
            d="m228.46,298.1c2.73-4.07,4.45-8.73,5.01-13.59l30.62-41.03-19.95-14-28.91,43.13c-4.23,2.47-7.8,5.93-10.42,10.06-6.7,10.27-6.83,22.04-.3,26.3,6.53,4.26,17.25-.61,23.95-10.87h0Z"
            fill="#ffb6b6"
          />
          <polygon
            points="352.62 135.1 310.56 109.89 234.09 239.74 256.75 261.77 352.62 135.1"
            fill="#6c63ff"
          />
          <polygon
            points="566.48 329.07 575.46 415.07 541.22 417.82 539.26 334.35 566.48 329.07"
            fill="#ffb6b6"
          />
          <path
            d="m575.87,396.1h0l27.6,11.82s44.8,14.35,22.55,21.47-83.66,16.1-87.27,5.56c-3.61-10.54-2.95-34.73-2.95-34.73l40.07-4.11h0Z"
            fill="#2f2e41"
          />
          <path
            d="m428.4,219.17l14.23,6.82s104.58-5.87,111.68,13.53c7.1,19.41,20.83,135.37,20.83,135.37l-36.92,2.37-16.09-78.57-93.72-79.52h-.01s0,0,0,0Z"
            fill="#2f2e41"
          />
          <path
            id="uuid-2fb5f450-2303-4fbd-97a7-1c64874c1514-73"
            d="m527.45,242.63c-3.51-3.42-7.78-5.95-12.47-7.38l-34.84-37.51-17.37,17.1,37.21,36.21c1.67,4.6,4.42,8.74,8.02,12.06,8.89,8.44,20.45,10.69,25.82,5.04s2.52-17.08-6.37-25.51h0Z"
            fill="#ffb6b6"
          />
          <polygon
            points="389.52 91.12 357.13 127.95 471.07 226.57 496.83 208.26 389.52 91.12"
            fill="#6c63ff"
          />
          <polygon
            points="514.38 327.31 459.24 393.91 433.3 371.39 491.55 311.56 514.38 327.31"
            fill="#ffb6b6"
          />
          <path
            d="m472.08,375.66h0l10.88,27.98s21.11,42.04.45,31.13-70.05-48.48-65.06-58.44,22.74-26.42,22.74-26.42l30.99,25.74h0Z"
            fill="#2f2e41"
          />
          <path
            d="m365.93,246.15s-20.83,49.22,13.25,49.22,114.07-2.84,114.07-2.84l-23.67,41.65,27.93,14.2s58.69-55.38,54.9-80.46-109.78-41.93-109.78-41.93l-21.41,5.63-55.29,14.53h0Z"
            fill="#2f2e41"
          />
          <path
            d="m363.11,11.12s36.74,1.95,40.03,16.05c3.29,14.09-4.24,28.48,7.58,28.33s15.95,5.11,15.95,5.11c0,0-12.06,34.15-31,36.11s-32.56-85.6-32.56-85.6Z"
            fill="#2f2e41"
          />
          <polygon
            points="387.75 105.3 388.89 73.64 347.84 67.82 345.52 95.97 387.75 105.3"
            fill="#ffb6b6"
          />
          <path
            d="m398.9,42.53c5.73,17.12-3.51,35.65-20.63,41.38s-35.65-3.51-41.38-20.63,3.51-35.65,20.63-41.38,35.65,3.51,41.38,20.63Z"
            fill="#ffb6b6"
          />
          <path
            d="m393.31,92.9l-37.58-7.83-7,62.78c-1.79,6.96,1.67,33.4,3.51,40.34l11.32,76.15,79.07-38.36-18.01-44.62,3.91-32.1-35.23-56.36h.01Z"
            fill="#6c63ff"
          />
          <path
            id="uuid-2ae02034-8b61-43cb-9dde-8a75b258f379-74"
            d="m411.17,177.1c-4.8,1-9.28,3.13-13.09,6.22l-50.58,7.94,4.48,23.96,50.82-10.64c4.75,1.18,9.72,1.21,14.48.09,11.97-2.66,20.29-10.99,18.6-18.6s-12.76-11.63-24.72-8.97h0Z"
            fill="#ffb6b6"
          />
          <path
            d="m381.28,132.5l-33.93-29.03-50.06,87.79c-1.48,20.46,17.19,36.56,37.21,32.07l44.9-10.95-8.57-36.13-25.24-.93,35.71-42.83h-.02Z"
            fill="#6c63ff"
          />
          <path
            d="m342.74,17.46s-40.24,11.09-31.11,27.03c9.13,15.94,19.85,20.42,18.52,29.42s9.26,43.91,25.37,38.52,40.16-15.71,40.16-15.71c0,0-33.96-28.53-27.98-33.37s-12.89-39-12.89-39c0,0,19.15-9.26,29.3-6.48s15.81,1.84,15.81,1.84c0,0-27.65-25.89-39.94-15.6-12.29,10.29-17.23,13.36-17.23,13.36h0s0,0,0-.01Z"
            fill="#2f2e41"
          />
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
          className="h-[500px] w-[90%] flex justify-center sixthFont2"
        >
          {user?.data?.services?.map((service: any, key: any) => {
            return (
              <SwiperSlide
                className="hover:scale-[1.02] transition-all ease-in-out duration-100"
                key={key}
              >
                <div className="flex justify-center">
                  <div
                    className={`w-[350px] flex justify-center bg-[#e1e5eb] h-[450px] py-2 rounded-xl`}
                  >
                    <div className="flex flex-col justify-start items-center">
                      <p className="sixthFont2 text-[30px] text-black mt-2">
                        {service?.name}
                      </p>
                      <p className="h-[300px] z-50 mt-2 px-2 text-[13px] md:text-[15px]">
                        {service?.description}
                      </p>
                      {/* <button className="bg-[#333333] text-white px-6 py-5 rounded-ss-full rounded-ee-full mt-2">
                      Read more
                    </button> */}
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
