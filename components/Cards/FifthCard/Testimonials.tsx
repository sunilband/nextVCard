"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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
  const windowSize: any = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize.current);
  return (
    <div className="bg-[#F0F2F5] h-[800px]">
      <div className="flex justify-center">
        <div className="w-[80%]">
          <h2 className="fifthFont text-[60px] text-black mt-10 break-all">
            Testimonials
          </h2>
          <p className="fifthFont text-[30px] text-black mb-10">
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
          className="h-[500px] w-[90%] flex justify-center fifthFont2"
        >
          {/*  */}
          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="flex justify-center">
              <div
                className={`w-[350px] flex justify-center bg-[#333333] text-white h-[450px] py-2 rounded-xl`}
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
                  <button className="bg-[#e1e5eb] text-black px-6 py-5 rounded-ss-full rounded-ee-full mt-2">
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
                className={`w-[350px] flex justify-center bg-[#333333] text-white h-[450px] py-2 rounded-xl`}
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
                  <button className="bg-[#e1e5eb] text-black px-6 py-5 rounded-ss-full rounded-ee-full mt-2">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="flex justify-center">
              <div
                className={`w-[350px] flex justify-center bg-[#333333] text-white h-[450px] py-2 rounded-xl`}
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
                  <button className="bg-[#e1e5eb] text-black px-6 py-5 rounded-ss-full rounded-ee-full mt-2">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="flex justify-center">
              <div
                className={`w-[350px] flex justify-center bg-[#333333] text-white h-[450px] py-2 rounded-xl`}
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
                  <button className="bg-[#e1e5eb] text-black px-6 py-5 rounded-ss-full rounded-ee-full mt-2">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="flex justify-center">
              <div
                className={`w-[350px] flex justify-center bg-[#333333] text-white h-[450px] py-2 rounded-xl`}
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
                  <button className="bg-[#e1e5eb] text-black px-6 py-5 rounded-ss-full rounded-ee-full mt-2">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="flex justify-center">
              <div
                className={`w-[350px] flex justify-center bg-[#333333] text-white h-[450px] py-2 rounded-xl`}
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
                  <button className="bg-[#e1e5eb] text-black px-6 py-5 rounded-ss-full rounded-ee-full mt-2">
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
