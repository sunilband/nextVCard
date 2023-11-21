import React from "react";
import dummyImage from "../../../public/images/dummyImage.jpg";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import figmaLogo from "../../../public/svgs/logos/figms.svg";
import styles from "./FifthCard.module.css";
import { useUserContext } from "@/context/userContexts";

type Props = {};

const Intro = (props: Props) => {
  const { user } = useUserContext();
  return (
    <>
      <div
        className={`${styles.hero} relative flex justify-center items-center flex-col `}
      >
        {/*  */}
        <div
          style={{
            position: "absolute",
            borderRadius: "inherit",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          data-framer-background-image-wrapper="true"
        >
          <Image
            src="https://framerusercontent.com/images/pq2TeLawbkeJCarurNVOzawp1o.png"
            alt=""
            // @ts-ignore
            srcSet="https://framerusercontent.com/images/pq2TeLawbkeJCarurNVOzawp1o.png?scale-down-to=512 512w, https://framerusercontent.com/images/pq2TeLawbkeJCarurNVOzawp1o.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/pq2TeLawbkeJCarurNVOzawp1o.png 1600w"
            width={1920}
            height={1080}
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              borderRadius: "inherit",
              objectPosition: "center",
              objectFit: "cover",
              imageRendering: "auto",
            }}
            className="grayscale opacity-50 z-[-1]"
          />
        </div>

        <Image
          src={user?.data?.profile ? user?.data?.profile : ""}
          alt=""
          width={300}
          height={300}
          className="z-50 rounded-xl hover:scale-105 transition-all duration-500 ease-in-out hover:drop-shadow-2xl"
        />

        <h2 className="fifthFont text-[80px] tracking-wider text-white text-center leading-tight">
          {user?.data?.name}
        </h2>

        <p className="px-4 sm:text-2xl text-md  text-justify mt-10 fifthFont2 z-50 tracking-wider ">
          {user?.data?.description}
        </p>
      </div>
      {/*  */}
      <div className="flex flex-col bg-black justify-center items-center h-[800px]">
        <div className="w-[80%]">
          <h2 className="fifthFont text-[60px] text-[#8b949e] my-10">About</h2>

          <div className="flex flex-wrap gap-8 fifthFont2 md:text-[30px] font-normal">
            <div className="flex flex-col gap-1 ">
              <p className="text-[#8B949E]">Postion</p>
              <p className="text-white">
                {user?.data?.designation} at{" "}
                <span className="font-bold">{user?.data?.company}</span>
              </p>
            </div>

            <div className="flex flex-col gap-1 ">
              <p className="text-[#8B949E]">Email</p>
              <p className="text-white">{user?.data?.email}</p>
            </div>

            <div className="flex flex-col gap-1 ">
              <p className="text-[#8B949E]">Phone</p>
              <p className="text-white">{user?.data?.phone}</p>
            </div>
          </div>

          <div className="flex flex-col gap-1 mt-7 md:text-[30px] font-normal fifthFont2">
            <p className="text-[#8B949E] ">Socials</p>
            <div className="mb-10">
              <p className="text-white flex flex-wrap gap-2">
                <span className="hover:text-blue-300 transition-all ease-in-out duration-150">
                  <a
                    href={
                      user?.data?.socials?.twitter
                        ? user?.data?.socials?.twitter
                        : ""
                    }
                  >
                    Twitter
                  </a>
                </span>
                ,
                <span className="hover:text-blue-300 transition-all ease-in-out duration-150">
                  <a
                    href={
                      user?.data?.socials?.facebook
                        ? user?.data?.socials?.facebook
                        : ""
                    }
                  >
                    Facebook
                  </a>
                </span>
                ,
                <span className="hover:text-blue-300 transition-all ease-in-out duration-150">
                  <a
                    href={
                      user?.data?.socials?.instagram
                        ? user?.data?.socials?.instagram
                        : ""
                    }
                  >
                    Instagram
                  </a>
                </span>
                ,
                <span className="hover:text-blue-300 transition-all ease-in-out duration-150">
                  <a
                    href={
                      user?.data?.socials?.linkedin
                        ? user?.data?.socials?.linkedin
                        : ""
                    }
                  >
                    LinkedIn
                  </a>
                </span>
                ,
                <span className="hover:text-blue-300 transition-all ease-in-out duration-150">
                  <a
                    href={
                      user?.data?.socials?.youtube
                        ? user?.data?.socials?.youtube
                        : ""
                    }
                  >
                    Youtube
                  </a>
                </span>
                ,
                <span className="hover:text-blue-300 transition-all ease-in-out duration-150">
                  <a
                    href={
                      user?.data?.socials?.behance
                        ? user?.data?.socials?.behance
                        : ""
                    }
                  >
                    Behance
                  </a>
                </span>
                ,
                <span className="hover:text-blue-300 transition-all ease-in-out duration-150">
                  <a
                    href={
                      user?.data?.socials?.whatsapp
                        ? user?.data?.socials?.whatsapp
                        : ""
                    }
                  >
                    Whatsapp
                  </a>
                </span>
                ,
                <span className="hover:text-blue-300 transition-all ease-in-out duration-150">
                  <a
                    href={
                      user?.data?.socials?.github
                        ? user?.data?.socials?.github
                        : ""
                    }
                  >
                    Github
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
