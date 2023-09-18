"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

type Props = {};

const Services = (props: Props) => {
  const windowSize: any = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize.current);
  return (
    <div className="bg-black text-white martian">
      <h2 className="text-center w-[100vw]  pt-4 text-3xl tracking-wide font-medium ">
        Services
      </h2>
      <p className="text-center w-[100vw] text-lg tracking-wide font-medium ">
        (Swipe to explore)
      </p>

      <div className="pt-6">
        <Swiper
          spaceBetween={90}
          direction={"vertical"}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
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
          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="w-[100%] flex justify-center text-center">
              <div className="lg:w-[500px] md:w-[400px] w-[300px]  h-[400px] border rounded-md my-2 bg-slate-100 text-[#242424]">
                <h2 className="text-center font-semibold tracking-wide bg-[#0077B6]  rounded-md h-7">
                  Service 1
                </h2>
                <p className="mt-4 font-light h-[80%] overflow-hidden px-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione ea repellendus possimus harum esse. Soluta quis neque
                  veniam nostrum eaque id architecto, hic molestias vero.
                  Blanditiis perferendis maxime asperiores enim vel explicabo
                  deserunt? Autem doloremque iusto nisi, expedita asperiores
                  odit excepturi, eveniet iure vero sequi sed alias placeat
                  minus reiciendis.
                </p>
                <div className="flex w-[100%] justify-center">
                  <button className="w-[200px] bg-[#242424] text-white rounded-md border hover:scale-105 transition-all ease-in-out duration-100">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="w-[100%] flex justify-center text-center">
              <div className="lg:w-[500px] md:w-[400px] w-[300px]  h-[400px] border rounded-md my-2 bg-slate-100 text-[#242424]">
                <h2 className="text-center font-semibold tracking-wide bg-[#0077B6]  rounded-md h-7">
                  Service 1
                </h2>
                <p className="mt-4 font-light h-[80%] overflow-hidden px-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione ea repellendus possimus harum esse. Soluta quis neque
                  veniam nostrum eaque id architecto, hic molestias vero.
                  Blanditiis perferendis maxime asperiores enim vel explicabo
                  deserunt? Autem doloremque iusto nisi, expedita asperiores
                  odit excepturi, eveniet iure vero sequi sed alias placeat
                  minus reiciendis.
                </p>
                <div className="flex w-[100%] justify-center">
                  <button className="w-[200px] bg-[#242424] text-white rounded-md border hover:scale-105 transition-all ease-in-out duration-100">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="w-[100%] flex justify-center text-center">
              <div className="lg:w-[500px] md:w-[400px] w-[300px]  h-[400px] border rounded-md my-2 bg-slate-100 text-[#242424]">
                <h2 className="text-center font-semibold tracking-wide bg-[#0077B6]  rounded-md h-7">
                  Service 1
                </h2>
                <p className="mt-4 font-light h-[80%] overflow-hidden px-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione ea repellendus possimus harum esse. Soluta quis neque
                  veniam nostrum eaque id architecto, hic molestias vero.
                  Blanditiis perferendis maxime asperiores enim vel explicabo
                  deserunt? Autem doloremque iusto nisi, expedita asperiores
                  odit excepturi, eveniet iure vero sequi sed alias placeat
                  minus reiciendis.
                </p>
                <div className="flex w-[100%] justify-center">
                  <button className="w-[200px] bg-[#242424] text-white rounded-md border hover:scale-105 transition-all ease-in-out duration-100">
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
