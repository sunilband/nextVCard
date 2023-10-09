import React from "react";
import dummyImage from "../../../public/images/dummyImage.jpg";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import figmaLogo from "../../../public/svgs/logos/figms.svg";
import "./SixthCard.css";

type Props = {};

const Intro = (props: Props) => {
  return (
    <>
      <div className="flex justify-center items-center gap-4 flex-wrap h-[800px] gradient">
        <div
          style={{
            clipPath: "url(#curve-s7og4V5VJ-bx2xvp)",
          }}
          className="md:h-[500px] md:w-[500px] h-[350px] w-[350px] relative flex justify-center items-center overflow-hidden "
        >
          <Image
            src={dummyImage}
            alt="dummyImage"
            className="md:w-[500px] md:h-[500px] h-[300px] w-[300px] rounded-full absolute top-50 left-50 "
          />
        </div>

        <div className="w-[500px]  flex flex-col justify-center items-center leading-none text-center">
          <h2 className="text-[150px] eighthFont ">John Doe</h2>
          <p className="text-[40px] eighthFont2">
            Software engineer at <span className="font-semibold">Google</span>
          </p>
        </div>
      </div>

      {/*  */}
      <div className="flex w-screen justify-center relative h-[800px]">
        <div className="w-[80%] z-50 ">
          <h2 className="eighthFont text-[60px] my-10 absolute z-50 text-[#16697A]">
            About
          </h2>
          {/*  */}
          <div
            style={{
              clipPath: "url(#curve-xbN8Uj7Qp-1g3c4m2)",
            }}
            className="absolute w-32 h-32 top-0 left-20 z-[10]"
          ></div>
          {/*  */}
          <p className="text-[30px] eighthFont2 mb-5 mt-32">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ad
            nostrum, porro possimus tempora incidunt molestiae. Ipsa sit quidem
            eligendi dignissimos quos beatae necessitatibus asperiores veniam
            nesciunt. Vero, illum sapiente.
          </p>
          <div className="flex flex-wrap gap-8 eighthFont2 md:text-[30px] font-normal">
            <div className="flex flex-col gap-1 p-3 rounded-md bg-[#EDE7E3]">
              <p className="underline">Email</p>
              <p className="">test@gmail.com</p>
            </div>

            <div className="flex flex-col gap-1 p-3 rounded-md bg-[#EDE7E3]">
              <p className="underline">Phone</p>
              <p className="">+918547487547</p>
            </div>
          </div>

          <div className="flex flex-col gap-1 mt-7 md:text-[30px] font-normal eighthFont2 p-3 rounded-md bg-[#EDE7E3]">
            <p className="underline ">Socials</p>
            <div className="mb-10">
              <p className=" flex flex-wrap gap-2">
                <span className="hover:text-blue-300 transition-all ease-in-out duration-150">
                  Twitter
                </span>
                ,
                <span className="hover:text-blue-300 transition-all ease-in-out duration-150">
                  Facebook
                </span>
                ,
                <span className="hover:text-blue-300 transition-all ease-in-out duration-150">
                  Instagram
                </span>
                ,
                <span className="hover:text-blue-300 transition-all ease-in-out duration-150">
                  LinkedIn
                </span>
                ,
                <span className="hover:text-blue-300 transition-all ease-in-out duration-150">
                  Youtube
                </span>
                ,
                <span className="hover:text-blue-300 transition-all ease-in-out duration-150">
                  Behance
                </span>
                ,
                <span className="hover:text-blue-300 transition-all ease-in-out duration-150">
                  Whatsapp
                </span>
                ,
                <span className="hover:text-blue-300 transition-all ease-in-out duration-150">
                  Github
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
