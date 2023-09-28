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
    <div className="h-[800px] relative">
      <div className="flex justify-center">
        <div className="w-[80%]">
          <h2 className="sixthFont text-[60px] text-black mt-10 break-all">
            Testimonials
          </h2>
          <p className="sixthFont text-[30px] text-black mb-10">
            (Swipe to explore)
          </p>
        </div>
      </div>
      {/*  */}
      <div
        className="absolute -left-56 -bottom-96 h-[800px] z-0 "
        data-framer-background-image-wrapper="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          width="100%"
          height="100%"
          viewBox="0 0 577.00869 614.65067"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M582.47657,494.53924c-40.4127,0-86.85714-44.84621-127.94893-23.53859-124.415,64.51367-107.28858-43.43994-143.032-83.58887l1.17347-2.35367c39.43875,35.36308,88.67933,64.1353,142.3988,83.20477,48.54556,17.23457,97.45513,25.21994,141.42331,23.11263l.07631,2.8291Q589.6025,494.54063,582.47657,494.53924Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#f2f2f2"
          />
          <path
            d="M877.47357,233.88537c-32.21551,24.39974-96.31582,16.69148-116.20791,58.48688-60.228,126.54525-111.754,30.14827-164.48777,19.72362l-.48562-2.58477c52.79008,4.37844,109.41448-2.4151,163.75112-19.64751,49.10434-15.5713,92.91452-38.7355,126.692-66.96178l1.76893,2.20918Q883.15494,229.5841,877.47357,233.88537Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#f2f2f2"
          />
          <ellipse
            cx="89.54489"
            cy="152.32747"
            rx="8.44737"
            ry="11.32747"
            fill="#e6e6e6"
          />
          <ellipse
            cx="444.54489"
            cy="258.32747"
            rx="8.44737"
            ry="11.32747"
            fill="#e6e6e6"
          />
          <ellipse
            cx="212.54489"
            cy="11.32747"
            rx="8.44737"
            ry="11.32747"
            fill="#e6e6e6"
          />
          <path
            d="M675.48474,560.80583l-9.8235-59.07561a4.577,4.577,0,0,1,3.76-5.25985l44.6152-7.41893a4.577,4.577,0,0,1,5.25982,3.76l9.82351,59.0756a4.577,4.577,0,0,1-3.75994,5.25985l-44.6152,7.41893A4.577,4.577,0,0,1,675.48474,560.80583Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#3f3d56"
          />
          <path
            d="M675.9399,542.39344l-6.31545-37.97915a4.28642,4.28642,0,0,1,3.52133-4.926l38.343-6.37595a4.28662,4.28662,0,0,1,4.92622,3.52129l8.74159,52.56925a4.28662,4.28662,0,0,1-3.52155,4.92605l-23.75269,3.94977A19.09378,19.09378,0,0,1,675.9399,542.39344Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#fff"
          />
          <path
            d="M677.59479,513.97881a4.1886,4.1886,0,0,1,3.441-4.81367l26.59846-4.423a4.184,4.184,0,1,1,1.37265,8.25469l-26.59846,4.423A4.1886,4.1886,0,0,1,677.59479,513.97881Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#f7575a"
          />
          <path
            d="M679.73,526.81945a4.18859,4.18859,0,0,1,3.441-4.81367l26.59846-4.423a4.184,4.184,0,1,1,1.37265,8.25469l-26.59846,4.423A4.18859,4.18859,0,0,1,679.73,526.81945Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#f7575a"
          />
          <path
            d="M681.86526,539.66009a4.18859,4.18859,0,0,1,3.441-4.81367l26.59847-4.423a4.184,4.184,0,1,1,1.37264,8.25469l-26.59846,4.423A4.1886,4.1886,0,0,1,681.86526,539.66009Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#f7575a"
          />
          <path
            d="M655.34018,505.12533a11.9666,11.9666,0,0,1,2.69128-18.151L642.46928,412.8735l20.62637,7.93046,11.94088,70.79225a12.03148,12.03148,0,0,1-19.69635,13.52912Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#ffb8b8"
          />
          <polygon
            points="336.978 596.816 353.955 596.815 362.032 531.329 336.975 531.33 336.978 596.816"
            fill="#ffb6b6"
          />
          <path
            d="M644.14261,733.94717l4.77875-.0002,18.657-7.58735,9.99957,7.58619h.00135a21.30874,21.30874,0,0,1,21.30758,21.30724v.69242l-54.74319.002Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#2f2e41"
          />
          <polygon
            points="183.573 574.742 198.768 582.315 235.209 527.31 212.783 516.133 183.573 574.742"
            fill="#ffb6b6"
          />
          <path
            d="M493.66529,710.52409l4.277,2.13161,20.0824,1.53223L523.59,725.43824l.00121.0006a21.30872,21.30872,0,0,1,9.56488,28.57489l-.30888.6197L483.85193,730.2145Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#2f2e41"
          />
          <path
            d="M655.99546,442.0777l-107.94908,2.81607,1.87737,52.56651s-1.87737,14.08031,1.87738,17.83506,5.63213,3.75475,3.75475,10.32557-6.7309,69.3528-6.7309,69.3528-44.30536,78.33949-42.428,80.21687,3.75475,0,1.87737,4.69344-3.75475,2.81606-1.87737,4.69343a69.13645,69.13645,0,0,1,4.69344,5.63213h30.59782s1.71108-9.38688,1.71108-10.32556,1.87737-6.57082,1.87737-7.5095,53.4588-57.57829,53.4588-57.57829l11.26425-93.86876,27.22195,91.99139s0,80.72713,1.87737,82.60451,1.87738.93869.93869,4.69344-4.69344,2.81606-1.87738,5.63212,3.75475-1.87737,2.81607,2.81607l-.93869,4.69344,36.06365.40282s3.75475-7.91233,1.87737-10.72839-1.76473-2.04737.52567-6.65581,3.22908-5.54713,2.2904-6.48582-.93869-5.93147-.93869-5.93147S666.321,499.33765,666.321,496.52159a9.36293,9.36293,0,0,1,.77978-4.22293v-3.82244L663.505,474.93177Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#2f2e41"
          />
          <path
            d="M753.30623,704.21131l.93144-20.94324a67.64032,67.64032,0,0,1,31.54965-7.98643c-15.15276,12.3885-13.25912,36.26927-23.53234,52.92887A40.68573,40.68573,0,0,1,732.41971,747.012l-12.68037,7.76379a68.17642,68.17642,0,0,1,14.36987-55.24594A65.85484,65.85484,0,0,1,746.212,688.28429C749.249,696.29218,753.30623,704.21131,753.30623,704.21131Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#f2f2f2"
          />
          <polygon
            points="288.604 115.052 342.675 224.404 332.096 357.116 263.002 350.803 250.612 131.022 288.604 115.052"
            fill="#2f2e41"
          />
          <path
            d="M676.02493,485.13955l-31.59571-2.88818-.04883-.40088L623.17727,306.29092l4.74512-13.15576a19.26545,19.26545,0,0,1,14.41406-12.32666V280.808a19.18106,19.18106,0,0,1,22.48828,15.34277l5.67432,30.64893,8.0498,103.60254Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#2f2e41"
          />
          <path
            d="M593.763,273.94334l6.37215-15.24555,19.7219.34625,20.56478,29.08951,21.58466,90.773s7.7526,66.30952,0,69.81-34.02915-.8224-34.02915-.8224Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#f7575a"
          />
          <path
            d="M619.857,259.044s42.48294,24.55778,44.14462,37.37694,7.225,169.7186,7.225,169.7186l-15.02345-9.7077-4.106-57.18443L633.7623,282.16886Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#2f2e41"
          />
          <circle cx="298.33255" cy="80.27277" r="28.95364" fill="#ffb8b8" />
          <path
            d="M576.98677,203.92295c3.25118-5.02977,9.3522-8.382,15.2667-7.44a20.848,20.848,0,0,1,34.93176-12.16009,6.48287,6.48287,0,0,1,6.33977-.63448,13.36724,13.36724,0,0,1,5.15061,4.13432,30.00055,30.00055,0,0,1,4.19793,30.52028c.72284-2.62776-1.91061-5.09988-4.57143-5.68956-2.66059-.58967-5.45161-.0318-8.14982-.4158-3.45822-.49207-6.56688-2.49823-10.03057-2.94972-2.911-.37944-5.83834.36689-8.677,1.115-2.83868.748-5.75853,1.51089-8.6736,1.16475-2.91529-.34615-6.6704,10.70164-6.62,18.483.00958,1.47463-.29415,3.36792-1.73526,3.68077-1.77472.38536-2.80311-2.06408-4.49231-2.73151a3.12509,3.12509,0,0,0-3.83309,2.03832,5.095,5.095,0,0,0,.97275,4.56254,15.0557,15.0557,0,0,0,3.65021,3.16646l-.6957.57861c-1.15722,1.52879-3.55764,1.595-5.22564.64919a11.27835,11.27835,0,0,1-3.75191-4.272c-3.08586-5.1326-5.79274-10.60132-6.88178-16.49039S573.73583,208.95271,576.98677,203.92295Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#2f2e41"
          />
          <path
            d="M513.9213,418.35173l57.84537-62.05992a6.484,6.484,0,0,1,9.15373-.32174l46.869,43.6861a6.484,6.484,0,0,1,.32171,9.15371l-57.84536,62.05991a6.484,6.484,0,0,1-9.15371.32177l-46.869-43.6861A6.484,6.484,0,0,1,513.9213,418.35173Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#e6e6e6"
          />
          <path
            d="M534.98817,402.958l37.18825-39.89774a6.07233,6.07233,0,0,1,8.57274-.30133l40.28,37.54453a6.07258,6.07258,0,0,1,.30155,8.57295l-51.47451,55.22488a6.0726,6.0726,0,0,1-8.573.30112l-24.9526-23.25806A27.049,27.049,0,0,1,534.98817,402.958Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#fff"
          />
          <path
            d="M568.32206,380.27141a5.93375,5.93375,0,0,1,8.37725-.29445l27.94213,26.04456a5.92726,5.92726,0,0,1-8.08279,8.67169l-27.94214-26.04455A5.93375,5.93375,0,0,1,568.32206,380.27141Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#e6e6e6"
          />
          <path
            d="M555.74883,393.76072a5.93373,5.93373,0,0,1,8.37724-.29445l27.94213,26.04455a5.92726,5.92726,0,1,1-8.08279,8.6717L556.04328,402.138A5.93373,5.93373,0,0,1,555.74883,393.76072Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#e6e6e6"
          />
          <path
            d="M543.17559,407.25a5.93376,5.93376,0,0,1,8.37725-.29445L579.495,433.00013a5.92726,5.92726,0,0,1-8.08279,8.6717L543.47,415.62727A5.93375,5.93375,0,0,1,543.17559,407.25Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#e6e6e6"
          />
          <path
            d="M611.16209,481.22039l-19.99867,28.63577-.93219,1.12287a11.10632,11.10632,0,0,1-6.34034,3.78514q-.52772.106-1.05988.15855a10.832,10.832,0,0,1-1.31838.05416c-.25212-.00448-.504-.01847-.75481-.04024a11.07826,11.07826,0,0,1-4.17677-1.21708l-8.53241-5.95887a3.42278,3.42278,0,0,1-1.3641-1.98117,3.47355,3.47355,0,0,1-.08344-1.21657,3.42,3.42,0,0,1,.59781-1.587l24.6254-35.26072a3.44149,3.44149,0,0,1,4.78594-.84995l13.70261,9.56963c.03244.02266.06366.04553.09559.06891.0204.01532.04081.03064.0602.0474.02761.02036.05422.04215.07959.06417.03382.02683.06591.0546.09749.08309.0287.02648.0574.053.08559.08016l.01673.016c.03584.03468.07117.07009.10478.10643.03411.03561.06793.07318.09981.11046.02309.02684.04638.05491.069.08248l.00238.00273c.06578.08241.12833.16792.18641.25674.01869.027.03637.05543.05333.08336l.00779.01188c.01414.02274.02757.045.04049.06795.03976.06746.07679.13729.11209.20805a3.53257,3.53257,0,0,1,.153.35994c.01452.0391.02731.07914.03939.11867.01077.03218.021.0651.02957.09894l.00252.00713.00362.01325c.00889.02873.01656.05768.0235.08613.01419.05494.02663.11083.03786.16693.00333.0152.00666.03039.00949.04631.00333.01519.00543.03061.00826.04652.00333.0152.00543.03061.008.0453l.00436.02449c.00682.04551.01241.09125.01729.13648.00632.057.01143.11416.01387.17056.00336.0474.00529.09379.006.1404.00127.04271.0011.08442.00042.12684a.2898.2898,0,0,1-.00119.03242c-.00045.04365-.00285.087-.00526.13039-.00651.10914-.01935.21814-.03631.32534-.00673.04035-.01367.07947-.02184.11881-.0091.04834-.01963.09568-.03089.14252-.0038.01772-.00883.03566-.01334.05288-.00667.02645-.01406.05239-.02146.07833-.00818.0286-.01686.05793-.02576.086l-.022.06832c-.01357.04093-.02808.08013-.04309.12-.00905.02371-.0181.04742-.02838.07135a3.43514,3.43514,0,0,1-.247.49348c-.01237.01925-.02351.03828-.03588.05752C611.22127,481.1341,611.19229,481.17713,611.16209,481.22039Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#fff"
          />
          <circle cx="286.12309" cy="336.69752" r="2.93561" fill="#f7575a" />
          <path
            d="M564.45545,510.394a11.9666,11.9666,0,0,1,2.69128-18.15095l-15.56218-74.10088,20.62637,7.93046,11.94088,70.79225A12.03148,12.03148,0,0,1,564.45545,510.394Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#ffb8b8"
          />
          <path
            d="M553.02786,480.3251l-8.39454-54.08692-3.15429-103.876,2.34424-31.13428a19.18,19.18,0,0,1,20.70605-17.67334,19.26629,19.26629,0,0,1,15.65723,10.70361l6.1333,12.56885-2.18994,177.22559Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#2f2e41"
          />
          <path
            d="M817.06512,755.77212a1.54861,1.54861,0,0,1-1.5533,1.55322H397.46165a1.55322,1.55322,0,0,1,0-3.10644H815.51182A1.54866,1.54866,0,0,1,817.06512,755.77212Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#ccc"
          />
          <path
            d="M587.15556,234.68325a2,2,0,1,1,3.34,1.59273l3.36145,5.52392a1,1,0,0,1-1.70852,1.03971l-3.7795-6.211A1.99455,1.99455,0,0,1,587.15556,234.68325Z"
            transform="translate(-311.49566 -142.67466)"
            fill="#fff"
          />
          <rect
            x="589.01042"
            y="235.82042"
            width={1}
            height={3}
            rx="0.5"
            transform="translate(911.24023 41.08244) rotate(153.23663)"
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
          className="h-[500px] w-[90%] flex justify-center sixthFont2"
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
