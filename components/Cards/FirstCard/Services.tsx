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
          {/* <SwiperSlide className="min-w-[250px] max-w-[250px] px-2 h-[300px] p-2 border-[4px] bg-slate-100 rounded-md text-[#242424] drop-shadow-xl border-[#F9D254] relative">
            <div className="min-h-[400px] absoloute left-0">
              <h2 className="text-center font-semibold tracking-wide bg-[#F9D254] absolute w-[245px] left-0">
                Service 1
              </h2>
              <p className="text-left mt-4 font-light absolute left-2 right-2 top-5 h-[340px] overflow-hidden">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus excepturi magni blanditiis aspernatur repellat hic
                autem odio architecto fugiat eius similique aut quo quaerat ea
                minus vel, magnam tempore. Voluptates ut aliquam laboriosam sit
                ducimus laudantium? Temporibus dolores ea similique deleniti
                praesentium aspernatur earum aut culpa, ducimus aliquid,
                perferendis natus.
              </p>
              <button className="absolute bottom-2 left-6 w-[200px] bg-[#242424] text-white rounded-md border hover:scale-105 transition-all ease-in-out duration-100">
                Read more
              </button>
            </div>
          </SwiperSlide> */}
          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="w-[100%] flex justify-center">
              <div className="w-[300px] h-[400px] rounded-md my-2 bg-slate-100 text-[#242424] border-[4px] border-[#F9D254]">
                <h2 className="text-center font-semibold tracking-wide bg-[#F9D254] h-7">
                  Service 1
                </h2>
                <p className="text-left mt-4 font-light h-[80%] overflow-hidden px-3">
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
          {/*  */}
          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="w-[100%] flex justify-center">
              <div className="w-[300px] h-[400px] border rounded-md my-2 bg-slate-100 text-[#242424]">
                <h2 className="text-center font-semibold tracking-wide bg-[#F9D254] h-7">
                  Service 1
                </h2>
                <p className="text-left mt-4 font-light h-[80%] overflow-hidden px-3">
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
          {/*  */}
          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="w-[100%] flex justify-center">
              <div className="w-[300px] h-[400px] border rounded-md my-2 bg-slate-100 text-[#242424]">
                <h2 className="text-center font-semibold tracking-wide bg-[#F9D254] h-7">
                  Service 1
                </h2>
                <p className="text-left mt-4 font-light h-[80%] overflow-hidden px-3">
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
          {/*  */}
          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="w-[100%] flex justify-center">
              <div className="w-[300px] h-[400px] border rounded-md my-2 bg-slate-100 text-[#242424]">
                <h2 className="text-center font-semibold tracking-wide bg-[#F9D254] h-7">
                  Service 1
                </h2>
                <p className="text-left mt-4 font-light h-[80%] overflow-hidden px-3">
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
          {/*  */}
          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="w-[100%] flex justify-center">
              <div className="w-[300px] h-[400px] border rounded-md my-2 bg-slate-100 text-[#242424]">
                <h2 className="text-center font-semibold tracking-wide bg-[#F9D254] h-7">
                  Service 1
                </h2>
                <p className="text-left mt-4 font-light h-[80%] overflow-hidden px-3">
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
          {/*  */}
          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="w-[100%] flex justify-center">
              <div className="w-[300px] h-[400px] border rounded-md my-2 bg-slate-100 text-[#242424]">
                <h2 className="text-center font-semibold tracking-wide bg-[#F9D254] h-7">
                  Service 1
                </h2>
                <p className="text-left mt-4 font-light h-[80%] overflow-hidden px-3">
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
          {/*  */}
          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="w-[100%] flex justify-center">
              <div className="w-[300px] h-[400px] border rounded-md my-2 bg-slate-100 text-[#242424]">
                <h2 className="text-center font-semibold tracking-wide bg-[#F9D254] h-7">
                  Service 1
                </h2>
                <p className="text-left mt-4 font-light h-[80%] overflow-hidden px-3">
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
          {/*  */}
          <SwiperSlide className="hover:scale-[1.02] transition-all ease-in-out duration-100">
            <div className="w-[100%] flex justify-center">
              <div className="w-[300px] h-[400px] border rounded-md my-2 bg-slate-100 text-[#242424]">
                <h2 className="text-center font-semibold tracking-wide bg-[#F9D254] h-7">
                  Service 1
                </h2>
                <p className="text-left mt-4 font-light h-[80%] overflow-hidden px-3">
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
          {/*  */}x ...
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
