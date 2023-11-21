import React from "react";
import dummyImage from "../../../public/images/dummyImage.jpg";
import Image from "next/image";
import introBg from "./assets/introBg.svg";
import { useUserContext } from "@/context/userContexts";

type Props = {};

const Intro = (props: Props) => {
  const { user } = useUserContext();
  return (
    <>
      <div className="bg-[#2196F3] flex flex-col justify-center items-center relative h-[800px]">
        <div
          style={{
            clipPath: "url(#curve-sL5pCLkoC-s19y9)",
            background:
              "linear-gradient(135deg, rgb(13, 136, 238), rgb(10, 109, 189))",
          }}
          className="w-[700px] h-[700px] opacity-50 absolute z-0 left-50 right-50 top-10 animate-spin-slow"
        >
          <svg>
            <clipPath
              id="curve-sL5pCLkoC-s19y9"
              clipPathUnits="objectBoundingBox"
              transform="scale(0.005)"
            >
              <path d="M71.5579 16.3347C84.3365 -5.4449 115.825 -5.44489 128.603 16.3347L129.067 17.1257C134.963 27.1733 145.709 33.378 157.358 33.4596L158.276 33.466C183.527 33.6428 199.271 60.9123 186.798 82.8687L186.345 83.6661C180.591 93.7953 180.591 106.205 186.345 116.334L186.798 117.131C199.271 139.088 183.527 166.357 158.276 166.534L157.358 166.54C145.709 166.622 134.963 172.827 129.067 182.874L128.603 183.665C115.825 205.445 84.3365 205.445 71.5579 183.665L71.0938 182.874C65.1986 172.827 54.4517 166.622 42.8027 166.54L41.8856 166.534C16.6346 166.357 0.890585 139.088 13.3629 117.131L13.8159 116.334C19.5698 106.205 19.5698 93.7953 13.8159 83.6661L13.3629 82.8687C0.890585 60.9123 16.6346 33.6428 41.8856 33.466L42.8027 33.4596C54.4518 33.378 65.1986 27.1733 71.0938 17.1257L71.5579 16.3347Z"></path>
            </clipPath>
          </svg>
        </div>
        {/*  */}
        <Image
          src={user?.data?.profile ? user?.data?.profile : dummyImage}
          width={300}
          height={300}
          alt="dummyImage"
          className="rounded-full w-[300px] h-[300px] z-50 absolute left-50 right-50 top-[16rem]"
        />
      </div>
      {/*  */}
      <div className="bg-[#E3F2FD]  relative h-[2000px] sm:h-[1200px] md:h-[1080px] lg:h-[900px]">
        <div className="w-[80%] px-10">
          {/* shapes*/}
          <div
            style={{
              clipPath: "url(#curve-jvQuo37yG-nyhvrm)",
              background:
                "linear-gradient(135deg, rgb(21, 101, 192), rgb(13, 71, 161))",
            }}
            className=" w-52 h-52 absolute -z-0 top-20 right-10  sm:visible invisible opacity-80"
          >
            <svg>
              <clipPath
                id="curve-jvQuo37yG-nyhvrm"
                clipPathUnits="objectBoundingBox"
                transform="scale(0.005)"
              >
                <path d="M0 0H100C155.228 0 200 44.7715 200 100V200H100C44.7715 200 0 155.228 0 100V0Z"></path>
              </clipPath>
            </svg>
          </div>
          {/*  */}
          <div
            style={{
              clipPath: "url(#curve-PNeEw5vVp-s19y9)",
              background:
                "linear-gradient(135deg, rgb(21, 101, 192), rgb(13, 71, 161))",
            }}
            className=" w-52 h-52 absolute -z-0 left-10 top-96  sm:visible invisible opacity-80"
          >
            <svg>
              <clipPath
                id="curve-PNeEw5vVp-s19y9"
                clipPathUnits="objectBoundingBox"
                transform="scale(0.005)"
              >
                <path d="M71.5579 16.3347C84.3365 -5.4449 115.825 -5.44489 128.603 16.3347L129.067 17.1257C134.963 27.1733 145.709 33.378 157.358 33.4596L158.276 33.466C183.527 33.6428 199.271 60.9123 186.798 82.8687L186.345 83.6661C180.591 93.7953 180.591 106.205 186.345 116.334L186.798 117.131C199.271 139.088 183.527 166.357 158.276 166.534L157.358 166.54C145.709 166.622 134.963 172.827 129.067 182.874L128.603 183.665C115.825 205.445 84.3365 205.445 71.5579 183.665L71.0938 182.874C65.1986 172.827 54.4517 166.622 42.8027 166.54L41.8856 166.534C16.6346 166.357 0.890585 139.088 13.3629 117.131L13.8159 116.334C19.5698 106.205 19.5698 93.7953 13.8159 83.6661L13.3629 82.8687C0.890585 60.9123 16.6346 33.6428 41.8856 33.466L42.8027 33.4596C54.4518 33.378 65.1986 27.1733 71.0938 17.1257L71.5579 16.3347Z"></path>
              </clipPath>
            </svg>
          </div>
          {/* text */}
          <div className="absolute top-0 px-10">
            <h2 className="z-50 fourthFont uppercase text-[100px] mt-16 leading-none">
              {user?.data?.name}
            </h2>
            <p className="z-50 fourthFont2 text-[32px]">
              {user?.data?.description}
            </p>

            <div className="flex gap-x-36 gap-y-10 flex-wrap mt-40">
              <div>
                <p className="fourthFont2 text-3xl tracking-wider">Position</p>
                <p className="text-2xl">
                  {user?.data?.designation} at{" "}
                  <span className="font-bold">{user?.data?.company}</span>
                </p>
              </div>

              <div>
                <p className="fourthFont2 text-3xl tracking-wider">Phone</p>
                <p className="text-2xl">{user?.data?.phone}</p>
              </div>

              <div>
                <p className="fourthFont2 text-3xl tracking-wider">Email</p>
                <p className="text-2xl">{user?.data?.email}</p>
              </div>
            </div>
            <div>
              <p className="fourthFont2 text-3xl tracking-wider mt-10">
                Socials
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  className="text-2xl text-blue-500"
                  href={
                    user?.data?.socials?.twitter
                      ? user?.data?.socials?.twitter
                      : ""
                  }
                >
                  Twitter
                </a>
                <a
                  className="text-2xl text-blue-500"
                  href={
                    user?.data?.socials?.facebook
                      ? user?.data?.socials?.facebook
                      : ""
                  }
                >
                  Facebook
                </a>
                <a
                  className="text-2xl text-blue-500"
                  href={
                    user?.data?.socials?.instagram
                      ? user?.data?.socials?.instagram
                      : ""
                  }
                >
                  Instagram
                </a>
                <a
                  className="text-2xl text-blue-500"
                  href={
                    user?.data?.socials?.linkedin
                      ? user?.data?.socials?.linkedin
                      : ""
                  }
                >
                  LinkedIn
                </a>
                <a
                  className="text-2xl text-blue-500"
                  href={
                    user?.data?.socials?.youtube
                      ? user?.data?.socials?.youtube
                      : ""
                  }
                >
                  Youtube
                </a>
                <a
                  className="text-2xl text-blue-500"
                  href={
                    user?.data?.socials?.behance
                      ? user?.data?.socials?.behance
                      : ""
                  }
                >
                  Behance
                </a>
                <a
                  className="text-2xl text-blue-500"
                  href={
                    user?.data?.socials?.whatsapp
                      ? user?.data?.socials?.whatsapp
                      : ""
                  }
                >
                  Whatsapp
                </a>
                <a
                  className="text-2xl text-blue-500"
                  href={
                    user?.data?.socials?.github
                      ? user?.data?.socials?.github
                      : ""
                  }
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
