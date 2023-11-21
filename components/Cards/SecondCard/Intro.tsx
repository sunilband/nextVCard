import React from "react";
import dummyImage from "../../../public/images/dummyImage.jpg";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import figmaLogo from "../../../public/svgs/logos/figms.svg";
import { useUserContext } from "@/context/userContexts";
import { data } from "autoprefixer";

type Props = {};

const Intro = (props: Props) => {
  const { user } = useUserContext();
  return (
    <div className="martian">
      <div className="w-full lg:w-auto bg-[#0077B6]  flex lg:flex-row flex-col justify-between items-center border">
        <div className="flex justify-center items-center">
          {/* name */}
          <h1 className="text-[100px] text-center font-bold mt-4 tracking-widest text-white pl-3 leading-tight">
            {user?.name}
          </h1>
        </div>
        {/* image */}
        <div className="relative flex justify-center items-center w-[100vw] lg:w-[80%] h-[300px] ">
          <Image
            src={user?.data?.profile ? user?.data?.profile : ""}
            width={300}
            height={300}
            alt="dummyImage"
            className={`lg:w-[300px] lg:h-[300px] w-[300px] h-[300px]  mt-0  rounded-full p-4`}
          />
        </div>
        {/* title */}
        <div className="flex justify-center items-center pr-3 pb-2">
          <h2 className="text-5xl font-light text-center  mb-2 text-[#072AC8]">
            {user?.data?.designation ? user?.data?.designation : ""} at
            {/* Organization */}
            <span>
              <span className="text-6xl font-medium">
                {" "}
                {user?.data?.company}
              </span>
            </span>
          </h2>
        </div>
      </div>

      <div className="bg-black flex flex-col justify-center items-center lg:flex-row h-[600px]">
        <div className="flex flex-col items-center sm:w-[100%] justify-center text-white  mt-0 gap-14 lg:w-[75%]">
          <div className="flex justify-between items-center m-2  w-full">
            <div>
              <div className="flex flex-wrap justify-center items-center gap-x-5 text-white text-xl font-medium pb-3  tracking-wide">
                {/* bio */}
                <p className="text-xl font-light tracking-widest px-2 text-center mb-10">
                  {user?.data?.description ? user?.data?.description : ""}
                </p>
                <div className="flex flex-col gap-4 text-center">
                  {/* phone */}
                  <h2>{user?.data?.phone ? user?.data?.phone : ""}</h2>
                  {/* email */}
                  <h2>{user?.data?.email ? user?.data?.email : ""}</h2>
                </div>
              </div>

              {/* socials */}
              <div className="w-[100vw] lg:w-[75vw] flex justify-center space-x-4 items-center flex-wrap gap-2 mt-10">
                <SocialIcon
                  url={
                    user?.data?.socials?.twitter
                      ? user?.data?.socials?.twitter
                      : ""
                  }
                  bgColor="white"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  url={
                    user?.data?.socials?.facebook
                      ? user?.data?.socials?.facebook
                      : ""
                  }
                  bgColor="white"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  url={
                    user?.data?.socials?.instagram
                      ? user?.data?.socials?.instagram
                      : ""
                  }
                  bgColor="white"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  url={
                    user?.data?.socials?.linkedin
                      ? user?.data?.socials?.linkedin
                      : ""
                  }
                  bgColor="white"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  url={
                    user?.data?.socials?.youtube
                      ? user?.data?.socials?.youtube
                      : ""
                  }
                  bgColor="white"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  url={
                    user?.data?.socials?.behance
                      ? user?.data?.socials?.behance
                      : ""
                  }
                  bgColor="white"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  url={
                    user?.data?.socials?.whatsapp
                      ? user?.data?.socials?.whatsapp
                      : ""
                  }
                  network="whatsapp"
                  bgColor="white"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  url={
                    user?.data?.socials?.github
                      ? user?.data?.socials?.github
                      : ""
                  }
                  bgColor="white"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
