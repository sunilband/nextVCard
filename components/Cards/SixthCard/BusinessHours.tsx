import React from "react";
import styles from "./SixthCard.module.css";
import { useUserContext } from "@/context/userContexts";
type Props = {};

const BusinessHours = (props: Props) => {
  const { user } = useUserContext();
  return (
    <div className="h-[800px]  flex flex-col gap-2 justify-center items-center relative">
      <div className="w-[80%] flex flex-col gap-4">
        <h2 className="sixthFont text-[60px] text-black my-10 z-50">
          Business Hours
        </h2>
        {/*  */}
        <div
          className="absolute left-2 sm:h-[400px] md:h-[800px] z-0 bottom-0"
          data-framer-background-image-wrapper="true"
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
                id="Head/Front/No-Hair"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Head"
                  transform="translate(54.000000, 31.000000)"
                  fill="rgb(0, 0, 0)"
                >
                  <path d="M8.26227388,34.4901268 C3.65436435,29.0813759 0.535634794,22.4528771 1.05677633,15.0254539 C2.55833022,-6.37502057 32.3485306,-1.66718886 38.1433414,9.13393292 C43.9381521,19.9350547 43.249578,47.3329958 35.7603014,49.2634576 C32.7735882,50.033323 26.4110012,48.1474609 19.935372,44.244306 L24,73 L0,73 L8.26227388,34.4901268 Z"></path>
                </g>
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
                  fill="rgb(0, 0, 0)"
                  points="134 0 183.081639 124.226909 216.000898 229.25029 229 229.25029 178.673688 5.090379e-13"
                ></polygon>
                <path
                  d="M124.116628,0 C123.593979,43.6541888 115.971833,102.427468 114.754071,105.148648 C113.942229,106.962768 85.9161573,130.032465 30.6758546,174.357739 L39.6290713,183.938736 C104.807511,145.935376 138.9048,124.399339 141.920937,119.330628 C146.445143,111.72756 161.1744,41.763137 173,0 L124.116628,0 Z"
                  id="Leg"
                  fill="rgb(0, 0, 0)"
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
                id="Body/Pointing-Up"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <path
                  d="M191.456243,2.34082269 L229.360019,-9.03759567 C236.431,-14.5420411 243.100557,-18.5666331 249.36869,-21.1113719 C251.191683,-21.4545034 254.209733,-21.2552209 250.438302,-16.9769837 C246.666871,-12.6987465 242.892301,-8.02906778 243.969107,-6.23518449 C245.045914,-4.44130119 248.969279,-5.79360164 250.104775,-2.95198204 C250.861773,-1.05756897 244.361683,0.299249329 230.604506,1.11847287 L201.133571,18.4625605 L191.456243,2.34082269 Z M188.106855,69.1681252 L220.005126,92.5917238 C228.656594,94.9262021 235.884616,97.8306872 241.689192,101.305179 C243.060333,102.554584 244.717486,105.084837 239.031031,104.647546 C233.344575,104.210255 227.34361,104.006032 226.55899,105.945594 C225.774369,107.885156 229.215504,110.204659 227.629445,112.821636 C226.572072,114.566288 221.576617,110.191639 212.64308,99.6976902 L181.055424,86.5990869 L188.106855,69.1681252 Z"
                  id="Skin"
                  fill="rgb(0, 0, 0)"
                ></path>
                <path
                  d="M126.984936,15.649923 C152.146796,42.4399518 182.83581,59.9216266 224.690767,75.4277614 L215.396057,94.0136202 C172.211363,89.9419212 149.124049,86.6900124 131.024869,59.8586619 C126.482342,53.1245369 118.360034,29.953677 113.494175,17.9210142 L126.984936,15.649923 Z"
                  id="Coat-Back"
                  fill="#2026A2"
                  transform="translate(169.092471, 54.831772) rotate(15.000000) translate(-169.092471, -54.831772) "
                ></path>
                <path
                  d="M90,114 L167,114 C149.558211,60.8053811 140.648283,24.2959016 140.270216,4.47156148 C140.250941,3.46089747 138.384379,1.67996472 137.55857,1.91319372 C131.519523,3.61877223 125.057267,2.98104099 118.1718,0 C99.917485,29.3584068 93.6048263,65.5045499 90,114 Z"
                  id="Shirt"
                  fill="#F2F2F2"
                ></path>
                <path
                  d="M124.742502,0.0473953679 C146.814238,0.228130238 182.624,4.25865631 223.922675,-9 L228,11.3734803 C196.78685,31.4482286 165.18092,46.9990656 137.486251,44.790754 C149.512444,96.3770989 148.957979,138.605966 122.407472,138.605966 C109.728284,138.605966 96.0428359,138.605966 81.3511268,138.605966 C74.8304314,94.783947 91.9680949,34.0236152 107.855955,3.37659428 C108.462665,2.20627687 109.75441,-3.65929509e-13 112.797001,-3.65929509e-13 C115.448059,-3.65929509e-13 119.424647,-3.65929509e-13 124.726763,-3.65929509e-13 C124.73201,0.0157984696 124.737257,0.0315969258 124.742502,0.0473953679 Z"
                  id="Coat-Front"
                  fill="#1F28CF"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        {/*  */}
        <div className={`flex justify-center sixthFont2 text-xl z-50`}>
          <div className="flex justify-between border sm:w-[80%] w-[100%] sm:px-14 px-1 bg-slate-200">
            <p>Monday</p>
            <p className="font-bold">{user?.data?.businessHours?.monday}</p>
          </div>
        </div>

        <div className={`flex justify-center sixthFont2 text-xl z-50`}>
          <div className="flex justify-between border sm:w-[80%] w-[100%] sm:px-14 px-1 bg-slate-200">
            <p>Tuesday</p>
            <p className="font-bold">{user?.data?.businessHours?.tuesday}</p>
          </div>
        </div>

        <div className={`flex justify-center sixthFont2 text-xl z-50`}>
          <div className="flex justify-between border sm:w-[80%] w-[100%] sm:px-14 px-1 bg-slate-200">
            <p>Wednesday</p>
            <p className="font-bold">{user?.data?.businessHours?.wednesday}</p>
          </div>
        </div>

        <div className={`flex justify-center sixthFont2 text-xl z-50`}>
          <div className="flex justify-between border sm:w-[80%] w-[100%] sm:px-14 px-1 bg-slate-200">
            <p>Thursday</p>
            <p className="font-bold">{user?.data?.businessHours?.thursday}</p>
          </div>
        </div>

        <div className={`flex justify-center sixthFont2 text-xl z-50`}>
          <div className="flex justify-between border sm:w-[80%] w-[100%] sm:px-14 px-1 bg-slate-200">
            <p>Friday</p>
            <p className="font-bold">{user?.data?.businessHours?.friday}</p>
          </div>
        </div>

        <div className={`flex justify-center sixthFont2 text-xl z-50`}>
          <div className="flex justify-between border sm:w-[80%] w-[100%] sm:px-14 px-1 bg-slate-200">
            <p>Saturday</p>
            <p className="font-bold">{user?.data?.businessHours?.saturday}</p>
          </div>
        </div>

        <div className={`flex justify-center sixthFont2 text-xl z-50`}>
          <div className="flex justify-between border sm:w-[80%] w-[100%] sm:px-14 px-1 bg-slate-200">
            <p>Sunday</p>
            <p className="font-bold">{user?.data?.businessHours?.sunday}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHours;
