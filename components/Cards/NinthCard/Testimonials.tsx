"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FilledStar from "../../../public/svgs/StarFilled.svg";
import Image from "next/image";
import stockImage from "../../../public/images/testimonialStockImage.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
type Props = {};

const Services = (props: Props) => {
  const windowSize: any = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize.current);
  return (
    <div className="h-[800px] relative">
      <div className="flex justify-center">
        <div className="w-[80%]">
          <h2 className="ninthFont text-[60px]  mt-10 break-all">
            Testimonials
          </h2>
          <p className="ninthFont text-[30px]  mb-10">(Swipe to explore)</p>
        </div>
      </div>
      {/*  */}

      <div
        style={{
          clipPath: "url(#curve-L9RbCz749-xhqcvl)",
          background:
            "linear-gradient(48deg, rgba(130,192,204,1) 0%, rgba(255,166,43,1) 100%)",
        }}
        className="absolute -left-56 -bottom-96 sm:h-[800px] sm:w-[800px] w-[500px] h-[500px]  z-0 "
      >
        <svg>
          <clipPath
            id="curve-L9RbCz749-xhqcvl"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.005)"
          >
            <path d="M100 173.738C24.3644 236.944 -36.9438 175.636 26.2621 100C-36.9438 24.3644 24.3644 -36.9438 100 26.2621C175.621 -36.9438 236.944 24.3644 173.738 100C236.944 175.578 175.621 236.944 100 173.738Z"></path>
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
            reverseDirection: true,
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
          className="h-[500px] w-[90%] flex justify-center ninthFont2"
        >
          {/*  */}
          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="flex justify-center">
              <div
                className={`w-[350px] flex justify-center bg-[#FF4133] text-black h-[450px] py-2 rounded-xl`}
              >
                <div className="flex flex-col justify-start items-center">
                  <div className="flex gap-2 my-2">
                    <Image
                      src={FilledStar}
                      alt="filledStar"
                      width={20}
                      height={20}
                    />
                    <Image
                      src={FilledStar}
                      alt="filledStar"
                      width={20}
                      height={20}
                    />
                    <Image
                      src={FilledStar}
                      alt="filledStar"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex justify-center py-2">
                    <Image
                      src={stockImage}
                      alt="stockImage"
                      className="rounded-full w-28 h-28"
                    />
                  </div>
                  <p className="h-[300px] z-50 mt-2 px-2 text-[13px] md:text-[15px] text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores corrupti repellendus consectetur pariatur eius,
                  </p>
                  <button className="bg-[#290042] text-white px-6 py-5 rounded-md mt-2">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/*  */}
          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="flex justify-center">
              <div
                className={`w-[350px] flex justify-center bg-[#FF4133] text-black h-[450px] py-2 rounded-xl`}
              >
                <div className="flex flex-col justify-start items-center">
                  <div className="flex gap-2 my-2">
                    <Image
                      src={FilledStar}
                      alt="filledStar"
                      width={20}
                      height={20}
                    />
                    <Image
                      src={FilledStar}
                      alt="filledStar"
                      width={20}
                      height={20}
                    />
                    <Image
                      src={FilledStar}
                      alt="filledStar"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex justify-center py-2">
                    <Image
                      src={stockImage}
                      alt="stockImage"
                      className="rounded-full w-28 h-28"
                    />
                  </div>
                  <p className="h-[300px] z-50 mt-2 px-2 text-[13px] md:text-[15px] text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores corrupti repellendus consectetur pariatur eius,
                  </p>
                  <button className="bg-[#290042] text-white px-6 py-5 rounded-md mt-2">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="flex justify-center">
              <div
                className={`w-[350px] flex justify-center bg-[#FF4133] text-black h-[450px] py-2 rounded-xl`}
              >
                <div className="flex flex-col justify-start items-center">
                  <div className="flex gap-2 my-2">
                    <Image
                      src={FilledStar}
                      alt="filledStar"
                      width={20}
                      height={20}
                    />
                    <Image
                      src={FilledStar}
                      alt="filledStar"
                      width={20}
                      height={20}
                    />
                    <Image
                      src={FilledStar}
                      alt="filledStar"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex justify-center py-2">
                    <Image
                      src={stockImage}
                      alt="stockImage"
                      className="rounded-full w-28 h-28"
                    />
                  </div>
                  <p className="h-[300px] z-50 mt-2 px-2 text-[13px] md:text-[15px] text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores corrupti repellendus consectetur pariatur eius,
                  </p>
                  <button className="bg-[#290042] text-white px-6 py-5 rounded-md mt-2">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="flex justify-center">
              <div
                className={`w-[350px] flex justify-center bg-[#FF4133] text-black h-[450px] py-2 rounded-xl`}
              >
                <div className="flex flex-col justify-start items-center">
                  <div className="flex gap-2 my-2">
                    <Image
                      src={FilledStar}
                      alt="filledStar"
                      width={20}
                      height={20}
                    />
                    <Image
                      src={FilledStar}
                      alt="filledStar"
                      width={20}
                      height={20}
                    />
                    <Image
                      src={FilledStar}
                      alt="filledStar"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex justify-center py-2">
                    <Image
                      src={stockImage}
                      alt="stockImage"
                      className="rounded-full w-28 h-28"
                    />
                  </div>
                  <p className="h-[300px] z-50 mt-2 px-2 text-[13px] md:text-[15px] text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores corrupti repellendus consectetur pariatur eius,
                  </p>
                  <button className="bg-[#290042] text-white px-6 py-5 rounded-md mt-2">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="flex justify-center">
              <div
                className={`w-[350px] flex justify-center bg-[#FF4133] text-black h-[450px] py-2 rounded-xl`}
              >
                <div className="flex flex-col justify-start items-center">
                  <div className="flex gap-2 my-2">
                    <Image
                      src={FilledStar}
                      alt="filledStar"
                      width={20}
                      height={20}
                    />
                    <Image
                      src={FilledStar}
                      alt="filledStar"
                      width={20}
                      height={20}
                    />
                    <Image
                      src={FilledStar}
                      alt="filledStar"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex justify-center py-2">
                    <Image
                      src={stockImage}
                      alt="stockImage"
                      className="rounded-full w-28 h-28"
                    />
                  </div>
                  <p className="h-[300px] z-50 mt-2 px-2 text-[13px] md:text-[15px] text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores corrupti repellendus consectetur pariatur eius,
                  </p>
                  <button className="bg-[#290042] text-white px-6 py-5 rounded-md mt-2">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="flex justify-center">
              <div
                className={`w-[350px] flex justify-center bg-[#FF4133] text-black h-[450px] py-2 rounded-xl`}
              >
                <div className="flex flex-col justify-start items-center">
                  <div className="flex gap-2 my-2">
                    <Image
                      src={FilledStar}
                      alt="filledStar"
                      width={20}
                      height={20}
                    />
                    <Image
                      src={FilledStar}
                      alt="filledStar"
                      width={20}
                      height={20}
                    />
                    <Image
                      src={FilledStar}
                      alt="filledStar"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex justify-center py-2">
                    <Image
                      src={stockImage}
                      alt="stockImage"
                      className="rounded-full w-28 h-28"
                    />
                  </div>
                  <p className="h-[300px] z-50 mt-2 px-2 text-[13px] md:text-[15px] text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores corrupti repellendus consectetur pariatur eius,
                  </p>
                  <button className="bg-[#290042] text-white px-6 py-5 rounded-md mt-2">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
