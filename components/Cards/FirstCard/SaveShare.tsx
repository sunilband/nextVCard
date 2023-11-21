import React from "react";
import SaveLogo from "../../../public/svgs/Save.svg";
import ShareLogo from "../../../public/svgs/Share.svg";
import PhoneLogo from "../../../public/svgs/Phone.svg";
import Image from "next/image";
import { generateVCard } from "@/utils/generatevcard";
import { copyClipboard } from "@/utils/copyclipboard";
import { useUserContext } from "@/context/userContexts";

type Props = {};

const SaveShare = (props: Props) => {
  const { user } = useUserContext();
  return (
    <div className="bg-[#242424] flex justify-center items-center gap-4 lg:flex-row py-16 px-6 h-[500px]">
      <div className="flex flex-col gap-10 ">
        <button
          className="lg:w-96 w-80 h-16 rounded-lg bg-[#F9D254] flex p-2 justify-center items-center hover:bg-[#242424] hover:border-2 hover:border-[#F9D254] hover:text-[#F9D254] transition-all ease-in-out duration-150 relative font-medium tracking-widest"
          onClick={() => generateVCard(user?.data)}
        >
          Save Card
          <Image
            src={SaveLogo}
            alt="SaveLogo"
            className="w-6 h-6 absolute right-16 "
          />
        </button>

        <button
          className="lg:w-96 w-80 h-16 rounded-lg bg-[#F9D254] flex p-2 justify-center items-center hover:bg-[#242424] hover:border-2 hover:border-[#F9D254] hover:text-[#F9D254] transition-all ease-in-out duration-150 relative"
          onClick={() => copyClipboard(window.location.href)}
        >
          Share
          <Image
            src={ShareLogo}
            alt="SaveLogo"
            className="w-6 h-6 ml-2 absolute right-16"
          />
        </button>

        <button
          className="lg:w-96 w-80 h-16 rounded-lg bg-[#F9D254] flex p-2 justify-center items-center hover:bg-[#242424] hover:border-2 hover:border-[#F9D254] hover:text-[#F9D254] transition-all ease-in-out duration-150 relative"
          onClick={() => window.open(`mailto:${user?.data?.email}`)}
        >
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
