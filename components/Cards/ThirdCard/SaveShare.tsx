import React from "react";
import SaveLogo from "../../../public/svgs/Save.svg";
import ShareLogo from "../../../public/svgs/Share.svg";
import PhoneLogo from "../../../public/svgs/Phone.svg";
import Image from "next/image";

type Props = {};

const SaveShare = (props: Props) => {
  return (
    <div className="flex justify-center items-center gap-4 lg:flex-row py-16 px-6 h-[500px]">
      <div className="flex flex-col gap-10 ">
        <button className="lg:w-96 w-80 h-16 rounded-lg bg-[#0E79B2] flex p-2 justify-center items-center hover:bg-[#242424] hover:border-2 hover:border-[#0E79B2] hover:text-[#0E79B2] transition-all ease-in-out duration-150 relative font-medium tracking-widest">
          Save Card
          <Image
            src={SaveLogo}
            alt="SaveLogo"
            className="w-6 h-6 absolute right-16 "
          />
        </button>

        <button className="lg:w-96 w-80 h-16 rounded-lg bg-white flex p-2 justify-center items-center hover:bg-[#242424] hover:border-2 hover:border-white hover:text-white transition-all ease-in-out duration-150 relative">
          Share
          <Image
            src={ShareLogo}
            alt="SaveLogo"
            className="w-6 h-6 ml-2 absolute right-16"
          />
        </button>

        <button className="lg:w-96 w-80 h-16 rounded-lg bg-[#F39237] flex p-2 justify-center items-center hover:bg-[#242424] hover:border-2 hover:border-[#F39237] hover:text-[#F39237] transition-all ease-in-out duration-150 relative">
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
