"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useUserContext } from "@/context/userContexts";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FilledStar from "../../../public/svgs/StarFilled.svg";
import EmptyStar from "../../../public/svgs/StarEmpty.svg";
import Image from "next/image";
import stockImage from "../../../public/images/testimonialStockImage.jpg";

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
        Testimonials
      </h2>
      <p className="text-center w-[100vw] text-lg tracking-wide font-medium fourthFont text-[20px] mt-4">
        (Swipe to explore)
      </p>

      {/*  */}
      <div
        style={{
          clipPath: "url(#curve-xbN8Uj7Qp-nyhvrm)",
          background:
            "linear-gradient(135deg, rgb(203, 231, 251), rgb(156, 209, 248))",
        }}
        className="w-80 h-80 opacity-75 z-0 absolute left-[70%] -top-64   invisible sm:visible"
      >
        <svg>
          <clipPath
            id="curve-xbN8Uj7Qp-nyhvrm"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.005)"
          >
            <path d="M0 0H100C155.228 0 200 44.7715 200 100V200H100C44.7715 200 0 155.228 0 100V0Z"></path>
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
          navigation={windowSize.current[0] > 500 ? true : false}
          modules={[Autoplay, Pagination, Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-[500px] fourthFont2"
        >
          {user?.data?.testimonials?.map((testimonial: any, key: any) => {
            return (
              <SwiperSlide
                className="hover:scale-[1.02] transition-all ease-in-out duration-100"
                key={key}
              >
                <div className="w-[100%] flex justify-center">
                  <div className="w-[300px] h-[400px] rounded-md my-2 bg-[#64B5F6] text-white border-[4px] border-[#64B5F6]">
                    <div className="rounded-md h-14 flex justify-center items-center gap-2">
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
                    <p className="text-left mt-4 font-light h-[40%] overflow-hidden px-3">
                      {testimonial?.description}
                    </p>
                    {/* <div className="flex w-[100%] justify-center">
                    <button className="w-[200px] bg-[#cbe7fb] text-black rounded-md border hover:scale-[1.02] transition-all ease-in-out duration-100">
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
