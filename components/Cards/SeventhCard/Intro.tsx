import React from "react";
import dummyImage from "../../../public/images/dummyImage.jpg";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import figmaLogo from "../../../public/svgs/logos/figms.svg";
import styles from "./SixthCard.module.css";
import { useUserContext } from "@/context/userContexts";

type Props = {};

const Intro = (props: Props) => {
  const { user } = useUserContext();
  return (
    <>
      <div className="flex justify-center items-center gap-4 flex-wrap h-[800px]">
        <div
          style={{
            clipPath: "url(#curve-s7og4V5VJ-bx2xvp)",
            background:
              "linear-gradient(315deg, rgb(0, 0, 0), rgb(213, 189, 175))",
          }}
          className="md:h-[500px] md:w-[500px] h-[350px] w-[350px] relative flex justify-center items-center overflow-hidden "
        >
          <Image
            src={user?.data?.profile || ""}
            width={250}
            height={250}
            alt="dummyImage"
            className="md:w-[250px] md:h-[250px] h-[200px] w-[200px] rounded-full absolute top-50 left-50 "
          />
          <svg>
            <clipPath
              id="curve-s7og4V5VJ-bx2xvp"
              clipPathUnits="objectBoundingBox"
              transform="scale(0.005)"
            >
              <path d="M97.8118 1.84638C98.2359 -0.615472 101.764 -0.615455 102.188 1.8464L106.863 28.9805C107.236 31.1438 110.179 31.5163 111.077 29.5138L122.339 4.39701C123.361 2.11817 126.778 2.99725 126.578 5.48745L124.371 32.9338C124.195 35.1221 126.953 36.2162 128.32 34.5003L145.463 12.9789C147.018 11.0263 150.11 12.7293 149.298 15.0913L140.348 41.1255C139.634 43.2011 142.034 44.9481 143.784 43.6267L165.73 27.053C167.721 25.5493 170.293 27.9691 168.92 30.0546L153.789 53.0407C152.583 54.8733 154.474 57.1634 156.497 56.3195L181.867 45.7349C184.169 44.7746 186.06 47.7592 184.212 49.4371L163.851 67.9308C162.228 69.4053 163.491 72.0946 165.66 71.7812L192.86 67.8507C195.328 67.4941 196.419 70.8561 194.213 72.021L169.901 84.8603C167.963 85.8839 168.519 88.8034 170.697 89.0403L198.019 92.0109C200.498 92.2805 200.719 95.8084 198.294 96.3871L171.559 102.765C169.427 103.274 169.241 106.24 171.292 107.012L197.018 116.697C199.352 117.576 198.691 121.048 196.198 121.005L168.72 120.521C166.529 120.482 165.613 123.309 167.408 124.568L189.922 140.359C191.964 141.792 190.462 144.99 188.058 144.326L161.564 137.011C159.451 136.428 157.862 138.937 159.288 140.604L177.175 161.509C178.798 163.406 176.549 166.129 174.385 164.887L150.539 151.2C148.637 150.109 146.475 152.144 147.443 154.113L159.579 178.818C160.68 181.06 157.826 183.137 156.039 181.396L136.338 162.197C134.768 160.666 132.168 162.098 132.617 164.247L138.24 191.199C138.75 193.645 135.469 194.946 134.171 192.814L119.855 169.309C118.713 167.435 115.84 168.174 115.741 170.367L114.497 197.875C114.385 200.37 110.884 200.813 110.156 198.424L102.124 172.091C101.483 169.992 98.5168 169.992 97.8764 172.091L89.8444 198.424C89.1156 200.813 85.6154 200.37 85.5025 197.875L84.259 170.367C84.1599 168.174 81.2866 167.435 80.1453 169.309L65.8294 192.814C64.5305 194.946 61.2502 193.645 61.7604 191.199L67.3835 164.247C67.8318 162.098 65.2323 160.666 63.6617 162.197L43.9615 181.396C42.1741 183.137 39.3198 181.06 40.421 178.818L52.5574 154.113C53.525 152.144 51.3625 150.109 49.4613 151.2L25.6147 164.887C23.4511 166.129 21.2022 163.406 22.8251 161.509L40.7123 140.604C42.1384 138.937 40.5489 136.428 38.4365 137.011L11.9418 144.326C9.53794 144.99 8.03576 141.792 10.0784 140.359L32.5924 124.568C34.3874 123.309 33.4707 120.482 31.28 120.521L3.80194 121.005C1.30888 121.048 0.647761 117.576 2.98188 116.697L28.708 107.012C30.7591 106.24 30.5728 103.274 28.4413 102.765L1.7065 96.3871C-0.719137 95.8084 -0.497588 92.2805 1.98131 92.0109L29.3032 89.0403C31.4815 88.8034 32.0373 85.8839 30.099 84.8603L5.78724 72.021C3.58145 70.856 4.67171 67.4941 7.13963 67.8507L34.3405 71.7812C36.5091 72.0946 37.7722 69.4053 36.1488 67.9308L15.7877 49.4371C13.9404 47.7592 15.8308 44.7746 18.1327 45.7349L43.5034 56.3195C45.5262 57.1634 47.417 54.8733 46.2107 53.0407L31.0796 30.0546C29.7067 27.9691 32.2786 25.5493 34.2698 27.053L56.2162 43.6267C57.966 44.9481 60.3658 43.2011 59.6523 41.1255L50.7019 15.0913C49.8899 12.7293 52.9816 11.0263 54.537 12.9789L71.6801 34.5003C73.0469 36.2162 75.805 35.122 75.6291 32.9338L73.4219 5.48743C73.2216 2.99724 76.6389 2.11816 77.6608 4.39699L88.9235 29.5138C89.8214 31.5163 92.7645 31.1438 93.1372 28.9805L97.8118 1.84638Z"></path>
            </clipPath>
          </svg>
        </div>

        <div className="w-[500px]  flex flex-col justify-center items-center leading-none text-center">
          <h2 className="text-[80px] seventhFont ">{user?.data?.name}</h2>
          <p className="text-[20px] seventhFont2">
            {user?.data?.designation} at{" "}
            <span className="font-semibold">{user?.data?.company}</span>
          </p>
        </div>
      </div>

      {/*  */}
      <div className="flex w-screen justify-center relative h-[800px]">
        <div className="w-[80%] z-50 ">
          <h2 className="seventhFont text-[60px] my-10 absolute z-50">About</h2>
          {/*  */}
          <div
            style={{
              clipPath: "url(#curve-xbN8Uj7Qp-1g3c4m2)",
              background:
                "linear-gradient(135deg, rgb(204, 191, 179), rgb(183, 166, 148))",
            }}
            className="absolute w-32 h-32 top-0 left-20 z-[10]"
          >
            <svg>
              <clipPath
                id="curve-xbN8Uj7Qp-1g3c4m2"
                clipPathUnits="objectBoundingBox"
                transform="scale(0.005)"
              >
                <path d="M44 0H0v150c0 27.614 22.386 50 50 50h44V50C94 22.386 71.614 0 44 0Zm112 0c-27.614 0-50 22.386-50 50v150h44c27.614 0 50-22.386 50-50V0h-44Z"></path>
              </clipPath>
            </svg>
          </div>
          {/*  */}
          <p className="text-[30px] seventhFont2 mb-5 mt-32">
            {user?.data?.description}
          </p>
          <div className="flex flex-wrap gap-8 seventhFont2 md:text-[30px] font-normal">
            <div className="flex flex-col gap-1 p-3 rounded-md bg-[#BFB0A0]">
              <p className="">Email</p>
              <p className="">{user?.data?.email}</p>
            </div>

            <div className="flex flex-col gap-1 p-3 rounded-md bg-[#BFB0A0]">
              <p className="">Phone</p>
              <p className="">{user?.data?.phone}</p>
            </div>
          </div>

          <div className="flex flex-col gap-1 mt-7 md:text-[30px] font-normal seventhFont2 p-3 rounded-md bg-[#BFB0A0]">
            <p className=" ">Socials</p>
            <div className="mb-10">
              <p className=" flex flex-wrap gap-2">
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
