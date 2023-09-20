import React from "react";
import SaveLogo from "../../../public/svgs/Save.svg";
import ShareLogo from "../../../public/svgs/Share.svg";
import PhoneLogo from "../../../public/svgs/Phone.svg";
import Image from "next/image";

type Props = {};

const SaveShare = (props: Props) => {
  return (
    <div className="flex justify-center items-center gap-4 lg:flex-row py-16 px-6 h-[500px] relative">
      {/* logo */}
      <div
        style={{
          clipPath: "url(#curve-dEdmTQvfJ-1n4l377)",
          background:
            "linear-gradient(315deg, rgb(13, 71, 161), rgb(21, 101, 192))",
        }}
        className="absolute rotate-45 bottom-0 opacity-60 left-28 scale-[4] w-40 h-40 z-0"
      >
        <svg>
          <clipPath
            id="curve-dEdmTQvfJ-1n4l377"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.005)"
          >
            <path d="M50 0H0V100C0 155.228 44.7715 200 100 200C155.228 200 200 155.228 200 100V0H150C122.386 0 100 22.3858 100 50C100 22.3858 77.6142 0 50 0Z"></path>
          </clipPath>
        </svg>
      </div>
      <div className="flex flex-col gap-10 ">
        <button className="lg:w-96 w-80 h-16 rounded-lg bg-[#64B5F6] flex p-2 justify-center items-center hover:bg-[#242424] hover:border-2 hover:border-[#64B5F6] hover:text-white transition-all ease-in-out duration-150 relative font-medium tracking-widest">
          Save Card
          <Image
            src={SaveLogo}
            alt="SaveLogo"
            className="w-6 h-6 absolute right-16 "
          />
        </button>

        <button className="lg:w-96 w-80 h-16 rounded-lg bg-[#64B5F6] flex p-2 justify-center items-center hover:bg-[#242424] hover:border-2 hover:border-[#64B5F6] hover:text-white transition-all ease-in-out duration-150 relative">
          Share
          <Image
            src={ShareLogo}
            alt="SaveLogo"
            className="w-6 h-6 ml-2 absolute right-16"
          />
        </button>

        <button className="lg:w-96 w-80 h-16 rounded-lg bg-[#64B5F6] flex p-2 justify-center items-center hover:bg-[#242424] hover:border-2 hover:border-[#64B5F6] hover:text-white transition-all ease-in-out duration-150 relative">
          Contact
          <Image
            src={PhoneLogo}
            alt="SaveLogo"
            className="w-6 h-6 ml-2 absolute right-16"
          />
        </button>
      </div>
    </div>
  );
};

export default SaveShare;
