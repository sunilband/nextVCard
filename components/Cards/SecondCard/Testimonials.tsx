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
    <div className="bg-[#0077B6] martian">
      <h2 className="text-center w-[100vw]  pt-4 text-3xl tracking-wide font-medium text-white">
        Testimonials
      </h2>
      <p className="text-center w-[100vw] text-lg tracking-wide font-medium text-white">
        (Swipe to explore)
      </p>

      <div className="pt-6">
        <Swiper
          spaceBetween={90}
          direction={"vertical"}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          slidesPerView={
            windowSize.current[0] > 1055
              ? 1
              : windowSize.current[0] > 800
              ? 1
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
          className="h-[500px]"
        >
          {user?.data?.testimonials?.map((testimonial: any, key: any) => {
            return (
              <SwiperSlide
                className="hover:scale-[1.02] transition-all ease-in-out duration-100"
                key={key}
              >
                <div className="w-[100%] flex justify-center">
                  <div className="lg:w-[500px] md:w-[400px] w-[300px] h-[400px] rounded-md my-2 bg-slate-100 text-[#242424] border-[4px] border-[#242424]">
                    <div className="bg-black h-14 flex justify-center items-center gap-2">
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
                    <p className="text-center mt-4 font-light h-[40%] overflow-hidden px-3">
                      {testimonial?.description}
                    </p>
                    {/* <div className="flex w-[100%] justify-center">
                    <button className="w-[200px] bg-[#242424] text-white rounded-md border hover:scale-[1.02] transition-all ease-in-out duration-100">
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
