import React from "react";
import styles from "./SixthCard.module.css";

type Props = {};

const BusinessHours = (props: Props) => {
  return (
    <div className="h-[800px]  flex flex-col gap-2 justify-center items-center relative">
      <div className="w-[80%] flex flex-col gap-4">
        <h2 className="seventhFont text-[60px] text-black my-10 z-50">
          Business Hours
        </h2>
        {/*  */}
        {/* className="absolute left-2 sm:h-[400px] md:h-[800px] z-0 bottom-0" */}
        <div
          style={{
            clipPath: "url(#curve-gsgKt11bQ-1740dks)",
            background:
              "linear-gradient(135deg, rgb(204, 191, 179), rgb(183, 166, 148))",
          }}
          className="absolute right-9 top-48 sm:top-20 h-[200px] w-[200px] md:h-[400px] md:w-[400px] z-0 bottom-0"
        >
          <svg>
            <clipPath
              id="curve-gsgKt11bQ-1740dks"
              clipPathUnits="objectBoundingBox"
              transform="scale(0.005)"
            >
              <path d="M50 0H0V100H50C22.3858 100 0 122.386 0 150V200H100V150C100 177.614 122.386 200 150 200H200V100H150C177.614 100 200 77.6142 200 50V0H100V50C100 22.3858 77.6142 0 50 0ZM100 100H50C77.6142 100 100 122.386 100 150V100ZM100 100V50C100 77.6142 122.386 100 150 100H100Z"></path>
            </clipPath>
          </svg>
        </div>
        {/*  */}
        <div className={`flex justify-center seventhFont2 text-xl z-50`}>
          <div className="flex justify-between border-b-2 sm:w-[80%] w-[100%] sm:px-14 px-1 ">
            <p>Monday</p>
            <p className="font-bold">8AM - 10PM</p>
          </div>
        </div>

        <div className={`flex justify-center seventhFont2 text-xl z-50`}>
          <div className="flex justify-between border-b-2 sm:w-[80%] w-[100%] sm:px-14 px-1 ">
            <p>Tuesday</p>
            <p className="font-bold">8AM - 10PM</p>
          </div>
        </div>

        <div className={`flex justify-center seventhFont2 text-xl z-50`}>
          <div className="flex justify-between border-b-2 sm:w-[80%] w-[100%] sm:px-14 px-1 ">
            <p>Wednesday</p>
            <p className="font-bold">8AM - 10PM</p>
          </div>
        </div>

        <div className={`flex justify-center seventhFont2 text-xl z-50`}>
          <div className="flex justify-between border-b-2 sm:w-[80%] w-[100%] sm:px-14 px-1 ">
            <p>Thursday</p>
            <p className="font-bold">8AM - 10PM</p>
          </div>
        </div>

        <div className={`flex justify-center seventhFont2 text-xl z-50`}>
          <div className="flex justify-between border-b-2 sm:w-[80%] w-[100%] sm:px-14 px-1 ">
            <p>Friday</p>
            <p className="font-bold">8AM - 10PM</p>
          </div>
        </div>

        <div className={`flex justify-center seventhFont2 text-xl z-50`}>
          <div className="flex justify-between border-b-2 sm:w-[80%] w-[100%] sm:px-14 px-1 ">
            <p>Saturday</p>
            <p className="font-bold">8AM - 10PM</p>
          </div>
        </div>

        <div className={`flex justify-center seventhFont2 text-xl z-50`}>
          <div className="flex justify-between border-b-2 sm:w-[80%] w-[100%] sm:px-14 px-1 ">
            <p>Sunday</p>
            <p className="font-bold">Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHours;
