import React from "react";
import dummyImage from "../../../public/images/dummyImage.jpg";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import figmaLogo from "../../../public/svgs/logos/figms.svg";
import "./SixthCard.css";

type Props = {};

const Intro = (props: Props) => {
  return (
    <>
      <div className="flex relative right-0 justify-center items-center gap-4 flex-wrap h-[800px] gradient">
        {/*  */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            transform: "scaleX(-1)",
          }}
          className="absolute -right-[36rem] -bottom-10"
        >
          <svg
            height="100%"
            width="100%"
            version="1.1"
            viewBox="0 -25 380 480"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="head" transform="translate(82.000000, 0.000000)">
              <g
                id="Head/Front/Short-2"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Head"
                  transform="translate(54.000000, 31.000000)"
                  fill="rgb(255, 255, 255)"
                >
                  <path d="M8.26227388,34.4901268 C3.65436435,29.0813759 0.535634794,22.4528771 1.05677633,15.0254539 C2.55833022,-6.37502057 32.3485306,-1.66718886 38.1433414,9.13393292 C43.9381521,19.9350547 43.249578,47.3329958 35.7603014,49.2634576 C32.7735882,50.033323 26.4110012,48.1474609 19.935372,44.244306 L24,73 L0,73 L8.26227388,34.4901268 Z"></path>
                </g>
                <path
                  d="M60.4181384,70.3075201 C57.4059021,56.9064588 48.8245327,47.7714043 50.1351137,41.781703 C51.0088343,37.7885688 53.3375617,35.3053788 57.1212959,34.3321331 C59.0782074,26.4155009 65.3896485,23.0482486 76.0556193,24.2303763 C92.0545754,26.0035679 101.819448,32.6477587 97.6024819,47.2678779 C93.7260987,47.2678779 89.0464758,45.8659867 82.57553,48.2678779 C80.5223249,49.0299883 79.0538125,51.3933595 78.1699927,55.3579915 L75.2457978,55.3579915 C72.4077436,50.6530572 69.6094038,48.9241222 66.8507787,50.1711866 C64.0921535,51.418251 63.4650732,54.4473753 64.9695377,59.2585597 L63.529076,70.3075201 L60.4181384,70.3075201 Z"
                  id="Hair"
                  fill="rgb(58, 1, 92)"
                ></path>
              </g>
            </g>
            <g id="bottom" transform="translate(0.000000, 187.000000)">
              <g
                id="Bottom/Standing/Baggy-Pants"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <polygon
                  id="Leg"
                  fill="rgb(255, 255, 255)"
                  points="134 0 183.081639 124.226909 216.000898 229.25029 229 229.25029 178.673688 5.090379e-13"
                ></polygon>
                <path
                  d="M124.116628,0 C123.593979,43.6541888 115.971833,102.427468 114.754071,105.148648 C113.942229,106.962768 85.9161573,130.032465 30.6758546,174.357739 L39.6290713,183.938736 C104.807511,145.935376 138.9048,124.399339 141.920937,119.330628 C146.445143,111.72756 161.1744,41.763137 173,0 L124.116628,0 Z"
                  id="Leg"
                  fill="rgb(255, 255, 255)"
                ></path>
                <g
                  id="Accessories/Shoe/Flat-Sneaker"
                  transform="translate(51.500000, 189.000000) rotate(50.000000) translate(-51.500000, -189.000000) translate(21.000000, 169.000000)"
                  fill="#E4E4E4"
                >
                  <path
                    d="M2.67813181,25.4019242 C1.55937727,28.3884109 1,30.6229931 1,32.1056708 C1,33.908957 1.3004142,36.5404001 1.90124261,40 C3.99318117,40 22.7937852,40 58.3030548,40 C59.768738,35.1545073 58.9226607,32.5385816 55.7648228,32.1522232 C52.606985,31.7658647 49.9837155,31.4170139 47.8950143,31.1056708 L21.6799926,19.4188835 C21.1755635,19.1940064 20.584344,19.4206282 20.359467,19.9250573 C20.35562,19.9336867 20.3518954,19.9423702 20.3482945,19.9511052 L18.6632131,24.038695 C15.7398812,25.4026522 13.3643706,26.0846307 11.5366811,26.0846307 C10.0517269,26.0846307 8.00099246,25.4849054 5.38447792,24.2854549 L5.38448339,24.285443 C4.38038273,23.8251478 3.19325534,24.2659892 2.73296014,25.2700899 C2.71312074,25.3133681 2.69483298,25.3573409 2.67813181,25.4019242 Z"
                    id="shoe"
                  ></path>
                </g>
                <g
                  id="Accessories/Shoe/Flat-Sneaker"
                  transform="translate(208.000000, 199.000000)"
                  fill="#E4E4E4"
                >
                  <path
                    d="M2.67813181,25.4019242 C1.55937727,28.3884109 1,30.6229931 1,32.1056708 C1,33.908957 1.3004142,36.5404001 1.90124261,40 C3.99318117,40 22.7937852,40 58.3030548,40 C59.768738,35.1545073 58.9226607,32.5385816 55.7648228,32.1522232 C52.606985,31.7658647 49.9837155,31.4170139 47.8950143,31.1056708 L21.6799926,19.4188835 C21.1755635,19.1940064 20.584344,19.4206282 20.359467,19.9250573 C20.35562,19.9336867 20.3518954,19.9423702 20.3482945,19.9511052 L18.6632131,24.038695 C15.7398812,25.4026522 13.3643706,26.0846307 11.5366811,26.0846307 C10.0517269,26.0846307 8.00099246,25.4849054 5.38447792,24.2854549 L5.38448339,24.285443 C4.38038273,23.8251478 3.19325534,24.2659892 2.73296014,25.2700899 C2.71312074,25.3133681 2.69483298,25.3573409 2.67813181,25.4019242 Z"
                    id="shoe"
                  ></path>
                </g>
                <polygon
                  id="Pant"
                  fill="#69A1AC"
                  points="167 218.432889 228.804464 211.725327 183 2.84217094e-14 127.644073 2.84217094e-14"
                ></polygon>
                <path
                  d="M43.4599581,158.900479 L84,206.885961 C126.699953,160.249961 151.594137,129.819963 158.682552,115.595966 C165.770967,101.37197 172.143091,62.839981 177.798925,0 L115.478146,0 C112.388642,55.2838742 110.306102,84.2121259 109.230525,86.7847551 C108.154948,89.3573843 86.2314253,113.395959 43.4599581,158.900479 Z"
                  id="Pant"
                  fill="#89C5CC"
                ></path>
              </g>
            </g>
            <g id="torso" transform="translate(22.000000, 82.000000)">
              <g
                id="Body/Long-Sleeve"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <path
                  d="M192,65.3107899 L231.482876,59.9251648 C239.381053,55.5320264 246.646993,52.5579486 253.280695,51.0029313 C255.147488,50.9484265 258.117196,51.6270536 253.693154,55.3151968 C249.269111,59.00334 244.780296,63.0831966 245.568527,65.0514942 C246.356757,67.0197919 250.471061,66.2874533 251.152638,69.3148625 C251.607023,71.3331352 244.929759,71.6610844 231.120845,70.2987101 L199.083874,83 L192,65.3107899 Z M67.9697919,74.4496834 L89.8671837,74.5318631 C65.8560993,128.56567 53.3363474,156.856914 52.3079281,159.405597 C49.9939846,165.140133 54.8906002,173.873732 56.9845874,178.567103 C50.1645409,181.61887 50.8912241,170.316929 42.2879189,174.319492 C34.4352209,177.972846 28.4616931,184.59248 19.3890352,178.994371 C18.2736052,178.306117 17.0512757,175.714714 20.0045784,173.68967 C27.3623323,168.644547 37.9653015,159.814672 39.3979297,156.908251 C41.3515741,152.944826 50.8755281,125.458637 67.9697919,74.4496834 Z"
                  id="Skin"
                  fill="rgb(255, 255, 255)"
                ></path>
                <path
                  d="M123.473568,9.66927317 L140.652814,9.31280705 C148.188654,47.0006412 173.203746,69.0336905 223.790464,56.4079457 L234.893349,104.819132 C187.489073,115.210412 143.760505,99.6935282 130.595778,48.4746485 C127.187846,35.2156986 124.201379,21.3681777 123.473568,9.66927317 Z"
                  id="Clothes-Back"
                  fill="#AFB9C5"
                  transform="translate(179.183459, 58.591470) rotate(5.000000) translate(-179.183459, -58.591470) "
                ></path>
                <path
                  d="M119.490817,0.0159395536 L145.467604,5.96527657 C145.467604,50.6444246 159.700025,79.150459 167,112 L96.8436541,112 C95.8553795,123.350899 95.2484887,135.017565 94.9322404,147 L42.4016357,147 C54.3053653,83.6639633 79.4301113,34.6639633 117.775873,0 L119.477154,0 L119.490817,0.0159395536 Z"
                  id="Clothes"
                  fill="#C5CFD6"
                ></path>
                <path
                  d="M107.912453,48.2592493 C106.104463,76.1005287 107.167794,97.3474456 111.102445,112 L96.8436541,112 C98.8014235,89.5139021 102.255877,68.2669888 107.91245,48.25926 Z"
                  id="Shade"
                  fill-opacity="0.1"
                  fill="#000000"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        {/*  */}
        <div
          style={{
            clipPath: "url(#curve-s7og4V5VJ-bx2xvp)",
          }}
          className="md:h-[500px] md:w-[500px] h-[350px] w-[350px] relative flex justify-center items-center overflow-hidden"
        >
          <Image
            src={dummyImage}
            alt="dummyImage"
            className="md:w-[500px] md:h-[500px] h-[300px] w-[300px] rounded-full absolute top-50 left-50 "
          />
        </div>

        <div className="w-[500px]  flex flex-col justify-center items-center leading-none text-center">
          <h2 className="text-[100px] ninthFont mb-2">John Doe</h2>
          <p className="text-[40px] ninthFont2">
            Software engineer at <span className="font-semibold">Google</span>
          </p>
        </div>
      </div>

      {/*  */}
      <div className="flex w-screen justify-center relative h-[800px]">
        <div className="w-[80%] z-50 ">
          <h2 className="ninthFont text-[60px] my-10 absolute z-50 leading-none">
            Meet John
          </h2>
          {/*  */}
          <div
            style={{
              clipPath: "url(#curve-xbN8Uj7Qp-1g3c4m2)",
            }}
            className="absolute w-32 h-32 top-0 left-20 z-[10]"
          ></div>
          {/*  */}
          <p className="md:text-[30px] text-[20px] ninthFont2 mb-5 mt-52 md:mt-32">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ad
            nostrum, porro possimus tempora incidunt molestiae. Ipsa sit quidem
            eligendi dignissimos quos beatae necessitatibus asperiores veniam
            nesciunt. Vero, illum sapiente.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 mb-10 font-semibold ninthFont2 md:text-[30px]">
            <p className="">test@gmail.com</p>

            <p className="">+918547487547</p>
          </div>

          <div className="flex gap-4 flex-wrap items-center">
            <SocialIcon
              url="https://twitter.com/jaketrent"
              bgColor="#FFFFFF"
              className="hover:scale-105 transition-all ease-in-out duration-100"
            />
            <SocialIcon
              url="https://facebook.com/jaketrent"
              bgColor="#FFFFFF"
              className="hover:scale-105 transition-all ease-in-out duration-100"
            />
            <SocialIcon
              url="https://instagram.com/jaketrent"
              bgColor="#FFFFFF"
              className="hover:scale-105 transition-all ease-in-out duration-100"
            />
            <SocialIcon
              url="https://linkedin.com/jaketrent"
              bgColor="#FFFFFF"
              className="hover:scale-105 transition-all ease-in-out duration-100"
            />
            <SocialIcon
              url="https://youtube.com/jaketrent"
              bgColor="#FFFFFF"
              className="hover:scale-105 transition-all ease-in-out duration-100"
            />
            <SocialIcon
              url="https://behance.com/jaketrent"
              bgColor="#FFFFFF"
              className="hover:scale-105 transition-all ease-in-out duration-100"
            />
            <SocialIcon
              url="https://whatsapp.com/jaketrent"
              bgColor="#FFFFFF"
              className="hover:scale-105 transition-all ease-in-out duration-100"
            />
            <SocialIcon
              url="https://github.com/sunilband"
              bgColor="#FFFFFF"
              className="hover:scale-105 transition-all ease-in-out duration-100"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
