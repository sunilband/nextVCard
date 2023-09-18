import React from "react";
import dummyImage from "../../../public/images/dummyImage.jpg";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import figmaLogo from "../../../public/svgs/logos/figms.svg";

type Props = {};

const Intro = (props: Props) => {
  return (
    <div className="martian">
      <div className="w-full lg:w-auto bg-[#0077B6]  flex lg:flex-row flex-col justify-between ">
        <div className="flex justify-center items-center">
          {/* name */}
          <h1 className="text-[100px] text-center font-bold mt-4 tracking-widest text-white pl-3 leading-tight">
            John Doe
          </h1>
        </div>
        {/* image */}
        <div className="relative flex justify-center items-center w-[100vw] lg:w-[80%] h-[300px]">
          <Image
            src={dummyImage}
            alt="dummyImage"
            className={`lg:w-[500px] lg:h-[500px] w-[300px] h-[300px] lg:mt-72 mt-0  rounded-full p-4`}
          />
        </div>
        {/* title */}
        <div className="flex justify-center items-center pr-3 pb-2">
          <h2 className="text-5xl font-light text-center  mb-2 text-[#072AC8]">
            IT developer at
            {/* Organization */}
            <span>
              <span className="text-6xl font-medium"> Google</span>
            </span>
          </h2>
        </div>
      </div>

      <div className="bg-black flex flex-col justify-center lg:flex-row h-[600px]">
        <div className="flex flex-col items-center sm:w-[100%] lg:w-[75%] justify-center text-white lg:mt-48 mt-0 gap-14">
          <div className="flex justify-between items-center m-2  w-full ">
            <div>
              <div className="flex flex-wrap justify-center  gap-x-5 text-white text-xl font-medium pb-3  tracking-wide">
                {/* bio */}
                <p className="text-xl font-light tracking-widest px-2 text-center mb-10">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sunt, facere magni. Culpa ex, ab vel molestiae officiis
                  mollitia quos impedit accusamus aliquam, ipsam cupiditate.
                  Sint voluptates facilis fuga eaque!
                </p>
                {/* phone */}
                <h2>+918390685016</h2>
                {/* email */}
                <h2>sunilbandwork@gmail.com</h2>
              </div>

              {/* socials */}
              <div className="w-[100vw] lg:w-[75vw] flex justify-center   space-x-4   items-center flex-wrap gap-2 mt-10">
                <SocialIcon
                  url="https://twitter.com/jaketrent"
                  bgColor="white"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  url="https://facebook.com/jaketrent"
                  bgColor="white"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  url="https://instagram.com/jaketrent"
                  bgColor="white"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  url="https://linkedin.com/jaketrent"
                  bgColor="white"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  url="https://youtube.com/jaketrent"
                  bgColor="white"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  url="https://behance.com/jaketrent"
                  bgColor="white"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  url="https://whatsapp.com/jaketrent"
                  bgColor="white"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  url="https://github.com/sunilband"
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
