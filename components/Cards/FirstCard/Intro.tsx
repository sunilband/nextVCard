"use client";
import React from "react";
import dummyImage from "../../../public/images/dummyImage.jpg";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import figmaLogo from "../../../public/svgs/logos/figms.svg";
import { useUserContext } from "@/context/userContexts";

type Props = {};

const Intro = (props: Props) => {
  const { user } = useUserContext();
  console.log(user);
  return (
    <>
      <div className="bg-[#242424] flex flex-col justify-between lg:flex-row">
        <div className="w-full lg:w-auto  flex justify-center">
          <div className="relative bg-[#242424] flex justify-center w-[100vw] lg:w-[auto]">
            <Image
              // @ts-ignore
              src={user?.data?.profile ? user?.data?.profile : dummyImage}
              alt="dummyImage"
              width={300}
              height={300}
              className={`w-[300px] h-[300px] rounded-full p-4`}
            />
          </div>
        </div>

        <div className="flex flex-col self-center items-center sm:w-[100%]  lg:w-[75%] justify-center text-[#F9D254]">
          <div className="flex justify-between items-center m-2 gap-2 w-full ">
            <div>
              {/* name */}
              <div className=" w-[100vw] lg:w-[75vw] flex justify-center lg:justify-start">
                <h1 className="text-5xl text-center sm:text-left font-bold mt-4 tracking-widest">
                  {user?.name ? user?.name : ""}
                </h1>
              </div>

              {/* title */}
              <div className="w-[100vw] lg:w-[75vw] flex justify-center lg:justify-start">
                <h2 className="text-xl font-light text-center sm:text-left mb-2 text-slate-200">
                  {/* @ts-ignore */}
                  {user?.data?.designation ? user?.data?.designation : ""} at
                  {/* Organization */}
                  <span>
                    <span className="text-slate-200 text-xl font-medium">
                      {" "}
                      {/* @ts-ignore */}
                      {user?.data?.company ? user?.data?.company : ""}
                    </span>
                  </span>
                </h2>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 text-[#F9D254] text-xl font-medium pb-3 pt-6 tracking-wide">
                {/* phone */}
                {/* @ts-ignore */}
                <h2>{user.data.phone ? user.data.phone : ""}</h2>
                {/* email */}
                {/* @ts-ignore */}
                <h2>{user.data.email ? user.data.email : ""}</h2>
              </div>

              {/* socials */}
              <div className="w-[100vw] lg:w-[75vw] flex justify-center lg:justify-start  space-x-4   items-center flex-wrap gap-2 ">
                <SocialIcon
                  // @ts-ignore
                  url={
                    user?.data?.socials?.twitter
                      ? user?.data?.socials?.twitter
                      : ""
                  }
                  bgColor="#F9D254"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  // @ts-ignore
                  url={
                    user?.data?.socials?.facebook
                      ? user?.data?.socials?.facebook
                      : ""
                  }
                  bgColor="#F9D254"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  // @ts-ignore
                  url={
                    user?.data?.socials?.instagram
                      ? user?.data?.socials?.instagram
                      : ""
                  }
                  bgColor="#F9D254"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  // @ts-ignore
                  url={
                    user?.data?.socials?.linkedin
                      ? user?.data?.socials?.linkedin
                      : ""
                  }
                  bgColor="#F9D254"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  // @ts-ignore
                  url={
                    user?.data?.socials?.youtube
                      ? user?.data?.socials?.youtube
                      : ""
                  }
                  bgColor="#F9D254"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  // @ts-ignore
                  url={
                    user?.data?.socials?.behance
                      ? user?.data?.socials?.behance
                      : ""
                  }
                  bgColor="#F9D254"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  // @ts-ignore
                  url={
                    user?.data?.socials?.whatsapp
                      ? user?.data?.socials?.whatsapp
                      : ""
                  }
                  bgColor="#F9D254"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  // @ts-ignore
                  url={
                    user?.data?.socials?.github
                      ? user?.data?.socials?.github
                      : ""
                  }
                  bgColor="#F9D254"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
              </div>
            </div>
          </div>

          {/* bio */}
          <p className="text-lg font-light tracking-wide px-2 text-center lg:text-left">
            {/* @ts-ignore */}
            {user?.data?.description ? user?.data?.description : ""}
          </p>
        </div>
      </div>
      <div className="bg-[#242424] w-[100%] h-[2px]"></div>
    </>
  );
};

export default Intro;
